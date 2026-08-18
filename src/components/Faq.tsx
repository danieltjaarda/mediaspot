export type FaqItem = { question: string; answer: string };

type Props = {
  items: FaqItem[];
  title?: React.ReactNode;
  intro?: string;
};

/**
 * Veelgestelde vragen als native <details>, dus zonder JavaScript uitklapbaar
 * en volledig indexeerbaar. Combineer met faqSchema() in JsonLd voor rich results.
 */
export default function Faq({ items, title, intro }: Props) {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-14">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {title ?? (
                <>
                  Veelgestelde{" "}
                  <span
                    className="font-medium italic text-accent"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    vragen
                  </span>
                </>
              )}
            </h2>
            {intro && (
              <p className="mt-5 text-pretty leading-relaxed text-neutral-500">
                {intro}
              </p>
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="liquid-glass divide-y divide-neutral-200/70 rounded-3xl px-2 sm:px-4" style={{ boxShadow: "none" }}>
              {items.map((item) => (
                <details
                  key={item.question}
                  className="group px-4 py-5 sm:px-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-neutral-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-neutral-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
