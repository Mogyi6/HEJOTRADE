type Props = {
  t: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    lead: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    quote: string;
  };
};

export default function AboutIntroduction({ t }: Props) {
  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#123F45]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123F45]">
                {t.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.titleLine1}
              <br />
              {t.titleLine2}
              <br />
              {t.titleLine3}
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-600">
              {t.lead}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-8 text-gray-700">
              {t.paragraph1}
            </p>

            <p className="leading-8 text-gray-600">
              {t.paragraph2}
            </p>

            <p className="leading-8 text-gray-600">
              {t.paragraph3}
            </p>

            <div className="border-l-4 border-[#E8DCC4] bg-white px-6 py-5 shadow-sm">
              <p className="font-medium leading-7 text-[#123F45]">
                „{t.quote}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}