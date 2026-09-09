import Image from "next/image";

type Props = {
  t: {
    eyebrow: string;
    title: string;
    description: string;
    since: string;
    ownership: string;
    engineering: string;
    imagePlaceholder: string;
    imageSize: string;
  };
};

export default function AboutHero({ t }: Props) {
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
      {/* Háttér dekoráció */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E8DCC4]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#E8DCC4]/10 blur-3xl" />

      {/* Tartalom */}
      <div
        className="
          relative
          mx-auto
          grid
          h-full
          max-w-[1600px]
          items-center
          gap-8
          px-6
          py-8
          sm:gap-10
          sm:py-10
          lg:grid-cols-2
          lg:gap-12
          lg:px-16
          lg:py-12
        "
      >
        {/* ================================================== */}
        {/* BAL OLDAL – SZÖVEG */}
        {/* ================================================== */}

        <div className="min-w-0 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8DCC4] sm:text-sm">
            {t.eyebrow}
          </span>

          <h1
            className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:mt-4
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {t.title}
          </h1>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-white/75
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

          {/* ================================================== */}
          {/* INFORMÁCIÓS KÁRTYÁK */}
          {/* ================================================== */}

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4 lg:mt-10">
            <div
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-4
                py-2
                text-xs
                font-medium
                text-white
                backdrop-blur-sm
                transition
                hover:border-[#E8DCC4]/40
                hover:bg-white/10
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              {t.since}
            </div>

            <div
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-4
                py-2
                text-xs
                font-medium
                text-white
                backdrop-blur-sm
                transition
                hover:border-[#E8DCC4]/40
                hover:bg-white/10
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              {t.ownership}
            </div>

            <div
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-4
                py-2
                text-xs
                font-medium
                text-white
                backdrop-blur-sm
                transition
                hover:border-[#E8DCC4]/40
                hover:bg-white/10
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              {t.engineering}
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* JOBB OLDAL – HERO KÉP */}
        {/* ================================================== */}
        {/* Csak lg mérettől jelenik meg.
            Ez ugyanaz a breakpoint, ahol a hamburger eltűnik. */}

        <div className="relative hidden h-full min-h-0 items-center lg:flex">
          <div
            className="
              relative
              h-full
              max-h-[520px]
              min-h-0
              w-full
              overflow-hidden
              rounded-[2rem]
              border
              border-white/15
              bg-white/5
              shadow-2xl
            "
          >
            <Image
              src="/hero.jpg"
              alt={t.title}
              fill
              priority
              sizes="(max-width: 1023px) 0px, 50vw"
              className="object-cover"
            />

            {/* Finom sötét overlay */}
            <div className="absolute inset-0 bg-[#123F45]/10" />

            {/* Alsó gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#123F45]/40 to-transparent" />
          </div>

          {/* Dekoratív keret */}
          <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 rounded-2xl border border-[#E8DCC4]/30 lg:block" />

          <div className="absolute -right-4 -top-4 hidden h-16 w-16 rounded-2xl border border-white/10 lg:block" />
        </div>
      </div>
    </section>
  );
}