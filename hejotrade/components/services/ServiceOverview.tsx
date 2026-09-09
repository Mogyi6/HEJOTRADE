type Props = {
  t: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    paragraph1: string;
    paragraph2: string;
    highlight: string;
  };
};

export default function ServiceOverview({ t }: Props) {
  return (
    <section id="overview" className="scroll-mt-64 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-24">
          <header className="border-t-2 border-[#123F45] pt-5">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#01497c]">
                  {t.eyebrow}
                </span>
                <p className="mt-3 text-sm leading-6 text-[#123F45]/55">
                  {t.lead}
                </p>
              </div>

              <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#123F45]/8">
                01
              </span>
            </div>
          </header>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="text-base leading-8 text-gray-700 sm:text-lg">
                {t.paragraph1}
              </p>

              <div>
                <p className="leading-8 text-gray-600">{t.paragraph2}</p>

                <div className="mt-8 border-l-2 border-[#01497c] pl-5">
                  <p className="font-semibold leading-7 text-[#123F45]">
                    {t.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
