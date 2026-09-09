type Props = {
  t: {
    partnersEyebrow: string;
    partnersTitle: string;
    clientsEyebrow: string;
    clientsTitle: string;
    partnerPlaceholder: string;
    partners: {
      name: string;
      logo: string;
    }[];
    clients: string[];
  };
};

export default function AboutPartners({ t }: Props) {
  return (
    <section className="bg-[#123F45] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* PARTNERS */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8DCC4]">
              {t.partnersEyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {t.partnersTitle}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex min-h-24 items-center justify-center rounded-xl border border-white/10 bg-white p-5 transition hover:bg-[#E8DCC4]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-14 w-full max-w-[180px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CLIENTS */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8DCC4]">
              {t.clientsEyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {t.clientsTitle}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {t.clients.map((client) => (
                <div
                  key={client}
                  className="border-b border-white/10 py-3 text-sm text-white/65"
                >
                  <span className="mr-3 text-[#E8DCC4]">•</span>

                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
