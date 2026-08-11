import { NextResponse } from "next/server";

/**
 * Verstuurt het contactformulier per e-mail.
 *
 * - Met RESEND_API_KEY gezet (aanbevolen, zie resend.com) mailen we via Resend.
 * - Zonder sleutel valt de route terug op FormSubmit, dat gratis doorstuurt
 *   naar het ontvangstadres. Bij de allereerste inzending stuurt FormSubmit
 *   eenmalig een activatiemail naar dat adres.
 */
const ONTVANGER = process.env.CONTACT_TO ?? "daniel@deskna.nl";

type Inzending = {
  naam: string;
  email: string;
  telefoon: string;
  onderwerp: string;
  bericht: string;
};

function valideer(body: Record<string, unknown>): Inzending | string {
  const naam = String(body.naam ?? "").trim();
  const email = String(body.email ?? "").trim();
  const telefoon = String(body.telefoon ?? "").trim();
  const onderwerp = String(body.onderwerp ?? "").trim();
  const bericht = String(body.bericht ?? "").trim();

  if (naam.length < 2 || naam.length > 100) {
    return "Vul je naam in.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return "Vul een geldig e-mailadres in.";
  }
  if (bericht.length < 1 || bericht.length > 5000) {
    return "Vul een bericht in.";
  }
  if (telefoon.length > 40 || onderwerp.length > 60) {
    return "Er ging iets mis met de invoer.";
  }

  return { naam, email, telefoon, onderwerp, bericht };
}

function mailtekst(inzending: Inzending): string {
  return [
    `Naam: ${inzending.naam}`,
    `E-mail: ${inzending.email}`,
    `Telefoon: ${inzending.telefoon || "-"}`,
    `Onderwerp: ${inzending.onderwerp || "-"}`,
    "",
    "Bericht:",
    inzending.bericht,
    "",
    "— Verstuurd via het contactformulier op mediaspot.nl",
  ].join("\n");
}

async function verstuurViaResend(inzending: Inzending, apiKey: string) {
  const antwoord = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Mediaspot <onboarding@resend.dev>",
      to: [ONTVANGER],
      reply_to: inzending.email,
      subject: `Nieuwe aanvraag via mediaspot.nl — ${inzending.naam}`,
      text: mailtekst(inzending),
    }),
  });

  if (!antwoord.ok) {
    throw new Error(`Resend gaf status ${antwoord.status}: ${await antwoord.text()}`);
  }
}

async function verstuurViaFormSubmit(inzending: Inzending) {
  const antwoord = await fetch(
    `https://formsubmit.co/ajax/${ONTVANGER}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // FormSubmit vereist een herkomst, anders wordt het verzoek geweigerd.
        Origin: "https://mediaspot.nl",
        Referer: "https://mediaspot.nl/contact",
      },
      body: JSON.stringify({
        name: inzending.naam,
        email: inzending.email,
        message: mailtekst(inzending),
        _subject: `Nieuwe aanvraag via mediaspot.nl — ${inzending.naam}`,
        _template: "box",
      }),
    },
  );

  const data = (await antwoord.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  if (!antwoord.ok || !data || String(data.success) !== "true") {
    throw new Error(
      `FormSubmit gaf status ${antwoord.status}: ${data?.message ?? "onbekende fout"}`,
    );
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, fout: "Ongeldige aanvraag." },
      { status: 400 },
    );
  }

  // Honeypot: echte bezoekers zien dit veld niet, bots vullen het wel in.
  // We doen dan alsof alles gelukt is, zonder iets te versturen.
  if (String(body.website ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const resultaat = valideer(body);
  if (typeof resultaat === "string") {
    return NextResponse.json({ ok: false, fout: resultaat }, { status: 400 });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      await verstuurViaResend(resultaat, apiKey);
    } else {
      await verstuurViaFormSubmit(resultaat);
    }
  } catch (fout) {
    console.error("Contactformulier kon niet versturen:", fout);
    return NextResponse.json(
      {
        ok: false,
        fout: "Versturen is niet gelukt. Bel of app ons gerust, dan helpen we je direct.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
