type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;

    phoneLabel: string;
    emailLabel: string;
    websiteLabel: string;

    phone: string;
    email: string;
  };
};

export default function ContactInfo({ t }: Props) {
  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          
          {/* Bal oldal */}
          <div className="rounded-[2rem] bg-[#123F45] p-8 shadow-xl sm:p-10 lg:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8DCC4]">
              {t.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t.title}
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              {t.description}
            </p>
          </div>

          {/* Jobb oldal */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            
            {/* Telefon */}
            <a
              href={`tel:${t.phone}`}
              className="
                group
                rounded-[1.5rem]
                border
                border-[#123F45]/10
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#123F45] text-[#E8DCC4]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M5 4h3l2 5-2 2c1.5 3 3 4.5 6 6l2-2 5 2v3c0 1-1 2-2 2C10.8 22 2 13.2 2 5c0-1 1-1 2-1h1Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#123F45]/50">
                    {t.phoneLabel}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-[#123F45]">
                    {t.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${t.email}`}
              className="
                group
                rounded-[1.5rem]
                border
                border-[#123F45]/10
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#123F45] text-[#E8DCC4]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#123F45]/50">
                    {t.emailLabel}
                  </p>

                  <p className="mt-1 break-all text-lg font-semibold text-[#123F45]">
                    {t.email}
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}