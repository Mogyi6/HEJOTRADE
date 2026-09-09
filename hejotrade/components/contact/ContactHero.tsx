type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export default function ContactHero({
  t,
}: Props) {
  return (
    <section
      className="
        relative
        h-[calc(100dvh-84px)]
        min-h-0
        overflow-hidden
        bg-[#123F45]

        sm:h-[calc(100dvh-96px)]

        lg:h-[calc(100dvh-168px)]
      "
    >
      {/* ================================================== */}
      {/* HÁTTÉR DEKORÁCIÓ */}
      {/* ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#E8DCC4]/10
          blur-3xl

          sm:h-[450px]
          sm:w-[450px]

          lg:-right-40
          lg:-top-40
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#E8DCC4]/10
          blur-3xl

          lg:h-[450px]
          lg:w-[450px]
        "
      />

      {/* ================================================== */}
      {/* TARTALOM */}
      {/* ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          items-center
          px-6
          py-6

          sm:px-8
          sm:py-8

          lg:px-16
          lg:py-10
        "
      >
        <div
          className="
            w-full
            max-w-3xl
          "
        >
          {/* ============================================== */}
          {/* EYEBROW */}
          {/* ============================================== */}

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
                bg-[#E8DCC4]

                sm:w-12
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#E8DCC4]

                sm:text-xs

                lg:text-sm
              "
            >
              {t.eyebrow}
            </span>
          </div>

          {/* ============================================== */}
          {/* FŐCÍM */}
          {/* ============================================== */}

          <h1
            className="
              mt-4
              max-w-3xl
              text-3xl
              font-bold
              leading-[1.05]
              tracking-[-0.025em]
              text-white

              sm:mt-5
              sm:text-4xl

              md:text-5xl

              lg:mt-6
              lg:text-6xl

              xl:text-[4.5rem]
            "
          >
            {t.title}
          </h1>

          {/* ============================================== */}
          {/* LEÍRÁS */}
          {/* ============================================== */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-white/70

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
      </div>
    </section>
  );
}