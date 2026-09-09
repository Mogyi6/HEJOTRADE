type Location = {
  title: string;
  address: string;
  description: string;
  mapEmbedUrl: string;
};

type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;
    items: Location[];
    mapLabel: string;
  };
};

export default function ContactLocations({ t }: Props) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

        {/* ================================================== */}
        {/* FEJLÉC */}
        {/* ================================================== */}

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#123F45]/60">
            {t.eyebrow}
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#123F45] sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            {t.description}
          </p>
        </div>

        {/* ================================================== */}
        {/* LOKÁCIÓK */}
        {/* ================================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.items.map((location, index) => (
            <article
              key={`${location.title}-${index}`}
              className="
                group
                overflow-hidden
                rounded-[2rem]
                border
                border-[#123F45]/10
                bg-[#F7F5EF]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* ================================================== */}
              {/* GOOGLE MAP */}
              {/* ================================================== */}

              <div className="relative aspect-[16/10] overflow-hidden bg-[#123F45]">
                <iframe
                  src={location.mapEmbedUrl}
                  title={`${location.title} - ${t.mapLabel}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    border-0
                    grayscale-[15%]
                    transition-all
                    duration-500
                    group-hover:grayscale-0
                    group-hover:scale-[1.02]
                  "
                />

                {/* Térkép felső árnyék */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/15 to-transparent" />

                {/* Térkép címke */}
                <div className="pointer-events-none absolute bottom-4 left-4">
                </div>
              </div>

              {/* ================================================== */}
              {/* HELYSZÍN ADATAI */}
              {/* ================================================== */}

              <div className="p-7 sm:p-8">

                <h3 className="text-2xl font-bold text-[#123F45]">
                  {location.title}
                </h3>

                {/* Cím */}
                <div className="mt-4 flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#123F45]/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 text-[#123F45]"
                    >
                      <path
                        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <p className="font-medium leading-6 text-[#123F45]/80">
                    {location.address}
                  </p>
                </div>

                {/* Leírás */}
                <p className="mt-5 leading-7 text-gray-600">
                  {location.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
