type Milestone = {
  year: string;
  title: string;
  description: string;
};

type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;
    milestones: Record<string, Milestone>;
  };
};

export default function AboutHistory({ t }: Props) {
  const milestones = Object.values(t.milestones);

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#01497c]">
            {t.eyebrow}
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#123F45] sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            {t.description}
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#123F45]/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <div
                  className={`pl-10 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <span className="text-sm font-bold tracking-widest text-[#01497c]">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#123F45]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>

                <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-white bg-[#E8DCC4] shadow md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}