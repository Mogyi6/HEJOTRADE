import Link from "next/link";

type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
};

export default function AboutContact({ t }: Props) {
  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#123F45] px-7 py-12 shadow-xl sm:px-12 sm:py-16 lg:px-20 lg:py-20">

          {/* Dekoratív háttérelemek */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E8DCC4]/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

          <div className="absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            {/* Szöveg */}
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8DCC4]">
                {t.eyebrow}
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {t.title}
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                {t.description}
              </p>
            </div>

            {/* Gomb */}
            <Link
              href="/contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#E8DCC4]
                px-7
                py-4
                text-sm
                font-bold
                text-[#123F45]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:shadow-xl
              "
            >
              {t.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
