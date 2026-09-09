import type { ServiceRoute } from "@/sections/ServicePageContent";

type Props = {
  service: ServiceRoute;

  homeHref?: string;
  homeLabel?: string;
  pageType?: string;

  t: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    badges: string[];
  };
};

const patternByService: Record<ServiceRoute, string> = {
  mining:
  "[background-image:radial-gradient(circle_at_center,rgba(18,63,69,0.15)_1.5px,transparent_1.5px)] [background-size:28px_28px]",
  energy:
    "[background-image:linear-gradient(rgba(1,73,124,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(1,73,124,0.10)_1px,transparent_1px),radial-gradient(circle_at_center,rgba(1,73,124,0.14)_1.5px,transparent_1.5px)] [background-size:32px_32px,32px_32px,64px_64px]",

  technology:
    "[background-image:repeating-linear-gradient(135deg,rgba(18,63,69,0.09)_0,rgba(18,63,69,0.09)_1px,transparent_1px,transparent_18px),repeating-linear-gradient(45deg,transparent_0,transparent_34px,rgba(1,73,124,0.05)_35px,transparent_36px)]",

  generalContracting:
    "[background-image:linear-gradient(90deg,rgba(18,63,69,0.08)_1px,transparent_1px),linear-gradient(rgba(18,63,69,0.08)_1px,transparent_1px),radial-gradient(circle_at_center,transparent_0,transparent_18px,rgba(18,63,69,0.06)_19px,transparent_20px)] [background-size:64px_64px,64px_64px,104px_104px]",
};

export default function ServiceHero({
  service,
  t,
}: Props) {
  return (
    <section
      className="
        relative
        h-[calc(100vh-168px)]
        min-h-[560px]
        overflow-hidden
        border-b
        border-[#123F45]/10
        bg-[#F7F5EF]
      "
    >
      {/* ========================================================= */}
      {/* JOBB OLDALI HÁTTÉR ALAKZATOK */}
      {/* ========================================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-[4%]
          inset-y-0
          hidden
          w-[92%]
          lg:block

          ${patternByService[service]}

          [mask-image:linear-gradient(to_left,black_0%,black_22%,rgba(0,0,0,0.96)_38%,rgba(0,0,0,0.78)_54%,rgba(0,0,0,0.52)_68%,rgba(0,0,0,0.28)_80%,rgba(0,0,0,0.10)_90%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_left,black_0%,black_22%,rgba(0,0,0,0.96)_38%,rgba(0,0,0,0.78)_54%,rgba(0,0,0,0.52)_68%,rgba(0,0,0,0.28)_80%,rgba(0,0,0,0.10)_90%,transparent_100%)]
        `}
      />

      {/* ========================================================= */}
      {/* JOBB OLDALI FINOM TÓNUS */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          hidden
          w-[72%]
          bg-gradient-to-l
          from-[#123F45]/[0.035]
          via-[#123F45]/[0.012]
          to-transparent
          lg:block
        "
      />

      {/* ========================================================= */}
      {/* TARTALOM */}
      {/* ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          max-w-[1400px]
          items-center
          px-6
          py-10
          sm:py-12
          lg:px-10
          lg:py-14
          xl:py-16
        "
      >
        <div
          className="
            grid
            w-full
            gap-12
            lg:grid-cols-[minmax(0,1fr)_380px]
            lg:items-center
            lg:gap-16
            xl:grid-cols-[minmax(0,1fr)_430px]
            xl:gap-20
          "
        >
          {/* ===================================================== */}
          {/* BAL OLDAL */}
          {/* ===================================================== */}

          <div className="relative z-10 max-w-4xl">
            {/* Kategória */}
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#01497c]" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#123F45]/60
                  sm:text-sm
                "
              >
                {t.eyebrow}
              </span>
            </div>

            {/* Főcím */}
            <h1
              className="
                mt-6
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.025em]
                text-[#123F45]
                sm:text-5xl
                lg:text-6xl
                xl:text-[4.5rem]
              "
            >
              {t.title}
            </h1>

            {/* Leírás */}
            <p
              className="
                mt-7
                max-w-3xl
                text-base
                leading-8
                text-gray-600
                sm:text-lg
              "
            >
              {t.description}
            </p>
          </div>

          {/* ===================================================== */}
          {/* JOBB OLDAL – SZAKTERÜLETEK LISTA */}
          {/* ===================================================== */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              items-center
            "
          >
            <aside
              className="
                w-full
                border-l-2
                border-[#123F45]
                bg-[#F7F5EF]/15
                pl-6
                backdrop-blur-[1.5px]
                sm:pl-8
              "
            >
              {/* Fejléc */}
              <div className="mb-5">
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#123F45]/45
                  "
                >
                  HEJŐTRADE
                </span>
              </div>

              {/* Lista */}
              <div
                className="
                  divide-y
                  divide-[#123F45]/15
                  border-y
                  border-[#123F45]/15
                "
              >
                {t.badges.map((badge) => (
                  <div
                    key={badge}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      py-4
                    "
                  >
                    {/* Jelölő */}
                    <span
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#01497c]
                        transition-all
                        duration-300
                        group-hover:w-4
                      "
                    />

                    {/* Szöveg */}
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#123F45]
                        transition-colors
                        duration-300
                        group-hover:text-[#01497c]
                      "
                    >
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}