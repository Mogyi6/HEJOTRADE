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
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          z-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#E8DCC4]/10
          blur-3xl
        "
      />

      {/* Szélesebb jobb oldali hero kép */}
      <div
        className="
          absolute
          inset-y-0
          right-0
          z-0
          hidden
          w-[75%]
          lg:block
          xl:w-[78%]
        "
      >
        <Image
          src="/hero.jpg"
          alt={t.title}
          fill
          priority
          sizes="(max-width: 1023px) 0px, (max-width: 1279px) 75vw, 78vw"
          className="object-cover"
        />

        {/* Finom sötét színezés */}
        <div className="absolute inset-0 bg-[#123F45]/10" />

        {/* Korábban kezdődő, hosszabb színátmenet */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-[70%]
          "
          style={{
            background:
              "linear-gradient(to right, #123F45 0%, rgba(18,63,69,0.98) 15%, rgba(18,63,69,0.85) 35%, rgba(18,63,69,0.55) 55%, rgba(18,63,69,0.2) 78%, transparent 100%)",
          }}
        />

        {/* Hosszabb, lágy blur réteg */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-[-10%]
            left-[-10%]
            z-10
            w-[45%]
            bg-[#123F45]/45
            blur-[70px]
          "
        />

        {/* Alsó finom sötétítés */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-10
            h-40
            bg-gradient-to-t
            from-[#123F45]/35
            to-transparent
          "
        />
      </div>

      {/* Tartalom */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          items-center
          px-6
          py-8
          sm:px-8
          sm:py-10
          lg:px-16
          lg:py-12
        "
      >
        <div
          className="
            min-w-0
            max-w-2xl
            lg:w-[48%]
            xl:w-[46%]
          "
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#E8DCC4]
              sm:text-sm
            "
          >
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

          {/* Információs kártyák */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
              sm:mt-8
              sm:gap-4
              lg:mt-10
            "
          >
            {[t.since, t.ownership, t.engineering].map((label, index) => (
              <div
                key={index}
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
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
