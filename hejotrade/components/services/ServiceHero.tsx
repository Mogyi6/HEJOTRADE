import type {
  CSSProperties,
} from "react";

import type {
  ServiceRoute,
} from "@/sections/ServicePageContent";


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


/* ============================================================= */
/* HÁTTÉRMINTÁK */
/* ============================================================= */

const patternByService:
  Record<
    ServiceRoute,
    CSSProperties
  > = {

  /* ========================================================= */
  /* BÁNYÁSZAT */
  /* ========================================================= */

  mining: {

    backgroundImage:
      "radial-gradient(circle at center, rgba(18,63,69,0.15) 1.5px, transparent 1.5px)",

    backgroundSize:
      "28px 28px",

  },


  /* ========================================================= */
  /* ENERGETIKA */
  /* ========================================================= */

  energy: {

    backgroundImage: `
      linear-gradient(
        rgba(1,73,124,0.10) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(1,73,124,0.10) 1px,
        transparent 1px
      )
    `,

    backgroundSize:
      "32px 32px, 32px 32px",

    backgroundPosition:
      "0 0, 0 0",

  },


  /* ========================================================= */
  /* TECHNOLÓGIA */
  /* ========================================================= */

  technology: {

    backgroundImage: `
      repeating-linear-gradient(
        135deg,
        rgba(18,63,69,0.09) 0px,
        rgba(18,63,69,0.09) 1px,
        transparent 1px,
        transparent 18px
      )
    `,

  },


  /* ========================================================= */
  /* GENERÁLKIVITELEZÉS */
  /* ========================================================= */

  generalContracting: {

    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(18,63,69,0.08) 1px,
        transparent 1px
      ),
      linear-gradient(
        rgba(18,63,69,0.08) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(18,63,69,0.035) 1px,
        transparent 1px
      ),
      linear-gradient(
        rgba(18,63,69,0.035) 1px,
        transparent 1px
      )
    `,

    backgroundSize:
      "64px 64px, 64px 64px, 16px 16px, 16px 16px",

  },

};


/* ============================================================= */
/* JOBB OLDALI MINTA MASZK */
/* ============================================================= */

const patternMask =
  "linear-gradient(to left, black 0%, black 22%, rgba(0,0,0,0.96) 38%, rgba(0,0,0,0.78) 54%, rgba(0,0,0,0.52) 68%, rgba(0,0,0,0.28) 80%, rgba(0,0,0,0.10) 90%, transparent 100%)";


/* ============================================================= */
/* COMPONENT */
/* ============================================================= */

export default function ServiceHero({
  service,
  t,
}: Props) {

  return (

    <section
      className="
        relative

        h-[calc(100dvh-84px)]
        min-h-0

        overflow-hidden

        border-b
        border-[#123F45]/10

        bg-[#F7F5EF]

        sm:h-[calc(100dvh-96px)]

        lg:h-[calc(100dvh-168px)]
      "
    >

      {/* ========================================================= */}
      {/* JOBB OLDALI HÁTTÉR MINTA */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[4%]
          inset-y-0
          hidden
          w-[92%]

          lg:block
        "
        style={{

          ...patternByService[
            service
          ],

          maskImage:
            patternMask,

          WebkitMaskImage:
            patternMask,

          maskRepeat:
            "no-repeat",

          WebkitMaskRepeat:
            "no-repeat",

          maskSize:
            "100% 100%",

          WebkitMaskSize:
            "100% 100%",

        }}
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
      {/* MOBIL HÁTTÉR DEKORÁCIÓ */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#01497c]/[0.04]
          blur-3xl

          lg:hidden
        "
      />


      {/* ========================================================= */}
      {/* TARTALOM */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-10

          mx-auto

          flex
          h-full
          w-full
          max-w-[1400px]

          items-center

          px-6
          py-5

          sm:px-8
          sm:py-7

          lg:px-10
          lg:py-10

          xl:py-12
        "
      >

        <div
          className="
            grid
            w-full
            min-w-0

            gap-6

            sm:gap-8

            lg:grid-cols-[minmax(0,1fr)_340px]
            lg:items-center
            lg:gap-10

            xl:grid-cols-[minmax(0,1fr)_410px]
            xl:gap-16
          "
        >

          {/* ===================================================== */}
          {/* BAL OLDAL */}
          {/* ===================================================== */}

          <div
            className="
              relative
              z-10
              min-w-0
              max-w-4xl
            "
          >

            {/* =============================================== */}
            {/* KATEGÓRIA */}
            {/* =============================================== */}

            <div
              className="
                flex
                items-center
                gap-3

                sm:gap-4
              "
            >

              <span
                className="
                  h-px
                  w-8
                  shrink-0
                  bg-[#01497c]

                  sm:w-12
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#123F45]/60

                  sm:text-xs

                  lg:text-sm
                "
              >
                {t.eyebrow}
              </span>

            </div>


            {/* =============================================== */}
            {/* FŐCÍM */}
            {/* =============================================== */}

            <h1
              className="
                mt-4
                max-w-4xl

                text-3xl
                font-bold
                leading-[1.05]
                tracking-[-0.025em]

                text-[#123F45]

                sm:mt-5
                sm:text-4xl

                md:text-5xl

                lg:mt-6
                lg:text-6xl

                xl:text-[4.25rem]
              "
            >
              {t.title}
            </h1>


            {/* =============================================== */}
            {/* LEÍRÁS */}
            {/* =============================================== */}

            <p
              className="
                mt-4
                max-w-3xl

                text-sm
                leading-6
                text-gray-600

                sm:mt-5
                sm:text-base
                sm:leading-7

                lg:mt-6
                lg:text-lg
                lg:leading-8
              "
            >
              {t.description}
            </p>

          </div>


          {/* ===================================================== */}
          {/* JOBB OLDAL – SZAKTERÜLETEK */}
          {/* ===================================================== */}

          <div
            className="
              relative
              z-10

              flex
              min-h-0
              items-center
            "
          >

            <aside
              className="
                w-full

                border-l-2
                border-[#123F45]

                bg-[#F7F5EF]/15

                pl-4

                backdrop-blur-[1.5px]

                sm:pl-6

                lg:pl-7

                xl:pl-8
              "
            >

              {/* =============================================== */}
              {/* FEJLÉC */}
              {/* =============================================== */}

              <div
                className="
                  mb-2

                  sm:mb-3

                  lg:mb-5
                "
              >

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#123F45]/45

                    sm:text-[10px]

                    lg:text-[11px]
                  "
                >
                  HEJŐTRADE
                </span>

              </div>


              {/* =============================================== */}
              {/* LISTA */}
              {/* =============================================== */}

              <div
                className="
                  divide-y
                  divide-[#123F45]/15

                  border-y
                  border-[#123F45]/15
                "
              >

                {t.badges.map(
                  (badge) => (

                    <div
                      key={badge}
                      className="
                        group

                        flex
                        items-center
                        gap-3

                        py-2

                        sm:py-2.5

                        lg:gap-4
                        lg:py-3

                        xl:py-4
                      "
                    >

                      {/* ===================================== */}
                      {/* JELÖLŐ */}
                      {/* ===================================== */}

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


                      {/* ===================================== */}
                      {/* SZÖVEG */}
                      {/* ===================================== */}

                      <span
                        className="
                          text-xs
                          font-semibold
                          leading-5
                          text-[#123F45]

                          transition-colors
                          duration-300

                          group-hover:text-[#01497c]

                          sm:text-sm
                        "
                      >
                        {badge}
                      </span>

                    </div>

                  )
                )}

              </div>

            </aside>

          </div>

        </div>

      </div>

    </section>

  );
}