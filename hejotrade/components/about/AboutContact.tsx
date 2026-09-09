import Link from "next/link";

type Props = {
  href: string;
  t: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
};

export default function AboutContact({ href, t }: Props) {
  return (
    <section className="border-t border-white/10 bg-[#123F45]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
          <div className="grid gap-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start sm:gap-8">
            <div className="border-t border-[#E8DCC4]/50 pt-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8DCC4]">
                {t.eyebrow}
              </span>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {t.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/60">
                {t.description}
              </p>
            </div>
          </div>

          <Link
            href={href}
            className="inline-flex w-fit items-center gap-4 border border-[#E8DCC4]/60 px-6 py-3.5 text-sm font-bold text-[#E8DCC4] transition-all hover:bg-[#E8DCC4] hover:text-[#123F45]"
          >
            {t.button}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
