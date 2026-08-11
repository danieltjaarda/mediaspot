"use client";

import { useState } from "react";

const onderwerpen = [
  "Bruiloft",
  "Evenement",
  "Bedrijfsvideo",
  "Social content",
  "Iets anders",
];

const veldStijl =
  "w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

type Status = "invullen" | "versturen" | "gelukt" | "fout";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("invullen");
  const [foutmelding, setFoutmelding] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formulier = event.currentTarget;
    const gegevens = Object.fromEntries(new FormData(formulier).entries());

    setStatus("versturen");
    setFoutmelding("");

    try {
      const antwoord = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gegevens),
      });
      const data = (await antwoord.json().catch(() => null)) as {
        ok?: boolean;
        fout?: string;
      } | null;

      if (!antwoord.ok || !data?.ok) {
        setFoutmelding(
          data?.fout ??
            "Versturen is niet gelukt. Bel of app ons gerust, dan helpen we je direct.",
        );
        setStatus("fout");
        return;
      }

      setStatus("gelukt");
    } catch {
      setFoutmelding(
        "Versturen is niet gelukt. Controleer je verbinding en probeer het opnieuw.",
      );
      setStatus("fout");
    }
  }

  if (status === "gelukt") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-8 text-center sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900">
          Bericht verstuurd
        </h3>
        <p className="mt-2 max-w-sm text-pretty text-neutral-500">
          Bedankt voor je bericht! We reageren meestal binnen een paar uur, op
          werkdagen uiterlijk binnen 24 uur.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 sm:p-8"
      noValidate={false}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="naam"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Naam
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Voor- en achternaam"
            className={veldStijl}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="naam@voorbeeld.nl"
            className={veldStijl}
          />
        </div>
        <div>
          <label
            htmlFor="telefoon"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Telefoonnummer{" "}
            <span className="font-normal text-neutral-400">(optioneel)</span>
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            autoComplete="tel"
            placeholder="06 12345678"
            className={veldStijl}
          />
        </div>
        <div>
          <label
            htmlFor="onderwerp"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Waar gaat het over?
          </label>
          <select
            id="onderwerp"
            name="onderwerp"
            defaultValue={onderwerpen[0]}
            className={`${veldStijl} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236e6e73%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
          >
            {onderwerpen.map((onderwerp) => (
              <option key={onderwerp} value={onderwerp}>
                {onderwerp}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="bericht"
          className="mb-1.5 block text-sm font-semibold text-neutral-900"
        >
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          placeholder="Vertel kort over jullie dag of project. Datum en locatie erbij? Dan kunnen we direct kijken of we beschikbaar zijn."
          className={`${veldStijl} resize-y`}
        />
      </div>

      {/* Honeypot tegen spam: onzichtbaar voor bezoekers */}
      <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "fout" && (
        <p
          role="alert"
          className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {foutmelding}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "versturen"}
          className="btn-squeeze inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-base font-semibold text-white hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "versturen" ? (
            <>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="animate-spin"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="2.5"
                />
                <path
                  d="M21 12a9 9 0 0 0-9-9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              Versturen…
            </>
          ) : (
            "Verstuur bericht"
          )}
        </button>
        <p className="text-xs leading-relaxed text-neutral-400">
          We gebruiken je gegevens alleen om te reageren.{" "}
          <a
            href="/privacybeleid"
            className="underline underline-offset-2 hover:text-neutral-600"
          >
            Privacybeleid
          </a>
        </p>
      </div>
    </form>
  );
}
