type CapacityItem = {
  value: string;
  label: string;
};

type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;
    items: CapacityItem[];
  };
};

export default function ServiceCapacity({ t }: Props) {
  return (
    <section id="capacity" className="scroll-mt-64 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-24">
          <header className="border-t-2 border-[#123F45] pt-5">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#01497c]">
                  {t.eyebrow}
                </span>
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {t.description}
                </p>
              </div>

              <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#123F45]/8">
                04
              </span>
            </div>
          </header>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>

            <div className="mt-10 grid border-l border-t border-[#123F45]/15 sm:grid-cols-2 xl:grid-cols-3">
              {t.items.map((item) => (
                <div
                  key={`${item.value}-${item.label}`}
                  className="min-h-40 border-b border-r border-[#123F45]/15 p-6 sm:p-7"
                >
                  <p className="text-3xl font-bold tracking-[-0.03em] text-[#01497c] sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-4 max-w-xs text-sm font-semibold leading-6 text-[#123F45]/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
