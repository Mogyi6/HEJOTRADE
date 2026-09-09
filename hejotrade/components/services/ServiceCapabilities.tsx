import type { ServiceRoute } from "@/sections/ServicePageContent";

type Capability = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  service: ServiceRoute;
  t: {
    eyebrow: string;
    title: string;
    description: string;
    items: Capability[];
  };
};

const detailByService: Record<ServiceRoute, string> = {
  mining: "rounded-full border border-white/10",
  energy: "rotate-45 border border-white/10",
  technology: "border border-white/10",
  generalContracting: "border-l border-t border-white/10",
};

export default function ServiceCapabilities({ service, t }: Props) {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-64 overflow-hidden bg-[#123F45] py-16 sm:py-20 lg:py-24"
    >
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 opacity-80 ${detailByService[service]}`}
      />
      <div
        className={`pointer-events-none absolute -bottom-16 right-40 hidden h-44 w-44 opacity-50 lg:block ${detailByService[service]}`}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-24">
          <header className="border-t border-white/25 pt-5">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8DCC4]">
                  {t.eyebrow}
                </span>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {t.description}
                </p>
              </div>

              <span className="text-5xl font-black leading-none tracking-[-0.08em] text-white/[0.06]">
                02
              </span>
            </div>
          </header>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>

            <div className="mt-10 border-t border-white/15">
              {t.items.map((item) => (
                <article
                  key={`${item.number}-${item.title}`}
                  className="group grid gap-4 border-b border-white/15 py-6 transition-colors md:grid-cols-[70px_minmax(180px,0.75fr)_minmax(0,1.25fr)] md:items-start md:gap-8 lg:py-7"
                >
                  <span className="pt-1 text-xs font-bold tracking-[0.2em] text-[#E8DCC4]/65">
                    {item.number}
                  </span>

                  <h3 className="text-lg font-bold leading-7 text-white transition-colors group-hover:text-[#E8DCC4] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="max-w-2xl text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
