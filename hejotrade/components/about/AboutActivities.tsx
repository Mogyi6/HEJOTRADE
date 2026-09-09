type Activity = {
  number: string;
  title: string;
  description: string;
  services: string[];
};

type Props = {
  t: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    items: Record<string, Activity>;
  };
};

export default function AboutActivities({ t }: Props) {
  const activities = Object.values(t.items);

  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#01497c]">
              {t.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.titleLine1}
              <br className="hidden sm:block" />
              {t.titleLine2}
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-600">
            {t.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.number}
              className="group relative overflow-hidden rounded-2xl border border-[#123F45]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#123F45]/5 transition-all duration-300 group-hover:h-32 group-hover:w-32" />

              <div className="relative">
                <span className="text-sm font-bold tracking-[0.2em] text-[#E8DCC4]">
                  {activity.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#123F45]">
                  {activity.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {activity.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {activity.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#01497c]" />

                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}