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
      {/* Teljes szélességű háttérkép */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt={t.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Finom sötét színezés */}
        <div className="absolute inset-0 bg-[#123F45]/10" />

        {/* Hosszabb, fokozatosan kifutó átmenet */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-full
            lg:w-[82%]
            xl:w-[80%]
          "
          style={{
            background:
              "linear-gradient(to right, #123F45 0%, rgba(18,63,69,0.99) 10%, rgba(18,63,69,0.95) 22%, rgba(18,63,69,0.85) 35%, rgba(18,63,69,0.68) 48%, rgba(18,63,69,0.46) 61%, rgba(18,63,69,0.25) 74%, rgba(18,63,69,0.09) 88%, transparent 100%)",
          }}
        />

        {/* Lágy blur réteg az átmenet bal oldalán */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-[-15%]
            left-[-8%]
            z-10
            w-[48%]
            bg-[#123F45]/40
            blur-[80px]
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
