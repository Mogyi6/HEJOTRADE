import Image from "next/image";

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
    <section className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        {/* Cím és bevezető */}
        <div className="mb-10 lg:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-[#123F45]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123F45]">
              {t.eyebrow}
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <h2 className="text-3xl font-bold leading-tight text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.titleLine1}
              <br />
              {t.titleLine2}
              <br />
              {t.titleLine3}
            </h2>

            <p className="max-w-md text-base leading-7 text-gray-600 lg:pb-1 lg:text-lg lg:leading-8">
              {t.lead}
            </p>
          </div>
        </div>

        {/* Portré és bemutatkozó szöveg */}
        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-16">
          <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:mx-0 lg:max-w-none">
            <Image
              src="/images/BanhegyiArpad.JPG"
              alt="Bánhegyi Árpád"
              width={720}
              height={900}
              sizes="(min-width: 1280px) 340px, (min-width: 1024px) 300px, (min-width: 640px) 360px, calc(100vw - 48px)"
              className="block h-auto w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="min-w-0 space-y-6">
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
