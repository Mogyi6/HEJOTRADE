type Props = {
  t: {
    eyebrow: string;
    title: string;

    companyName: string;
    companyType: string;

    registrationLabel: string;
    registrationNumber: string;

    taxLabel: string;
    taxNumber: string;

    bankLabel: string;
    bankAccount: string;
  };
};

export default function ContactCompanyData({ t }: Props) {
  return (
    <section className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="rounded-[2rem] bg-[#123F45] p-8 shadow-xl sm:p-10 lg:p-14">
          
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8DCC4]">
            {t.eyebrow}
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {t.title}
          </h2>

          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {t.companyName}
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                {t.companyType}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {t.registrationLabel}
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                {t.registrationNumber}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {t.taxLabel}
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                {t.taxNumber}
              </p>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <div className="h-px bg-white/10" />
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {t.bankLabel}
              </p>

              <p className="mt-2 break-all text-lg font-semibold text-[#E8DCC4]">
                {t.bankAccount}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}