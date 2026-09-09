import Image from "next/image";
import type { ServiceRoute } from "@/sections/ServicePageContent";

type Reference = {
  title: string;
  meta: string;
  description: string;
};

type Props = {
  service: ServiceRoute;
  t: {
    eyebrow: string;
    title: string;
    description: string;
    items: Reference[];
  };
};

type GalleryImage = {
  src: string;
  objectPosition?: string;
};

/*
 * A képek csak EGY helyen jelennek meg az oldalon: a Referenciák blokkban.
 * Itt illeszkednek a legjobban a tartalomhoz, mert valódi projekt- és
 * kivitelezési részleteket mutatnak, miközben a Hero változatlan marad.
 */
const galleryByService: Record<ServiceRoute, GalleryImage[]> = {
  mining: [
    {
      src: "/images/services/mining-dredging-close.webp",
      objectPosition: "50% 54%",
    },
    {
      src: "/images/services/mining-dredging-wide.webp",
      objectPosition: "52% 48%",
    },
  ],

  energy: [
    {
      src: "/images/services/energy-pipework.webp",
      objectPosition: "52% 52%",
    },
    {
      src: "/images/services/energy-installations.webp",
      objectPosition: "55% 50%",
    },
  ],

  technology: [
    {
      src: "/images/services/technology-production-hall.webp",
      objectPosition: "50% 52%",
    },
    {
      src: "/images/services/technology-workshop.webp",
      objectPosition: "60% 52%",
    },
  ],

  generalContracting: [
    {
      src: "/images/services/general-contracting-stadium.webp",
      objectPosition: "62% 52%",
    },
  ],
};

function ProjectMosaic({ service }: { service: ServiceRoute }) {
  const images = galleryByService[service];

  if (images.length === 1) {
    return (
      <div className="mt-8 max-w-[320px] lg:max-w-none">
        <figure className="group relative h-36 w-[88%] overflow-hidden border border-[#123F45]/15 bg-white shadow-[0_16px_34px_rgba(18,63,69,0.07)] sm:h-40 lg:h-36 lg:w-full xl:h-40">
          <Image
            src={images[0].src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 340px, (min-width: 1024px) 280px, 320px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            style={{ objectPosition: images[0].objectPosition }}
          />

          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-[#01497c]/70" />
        </figure>
      </div>
    );
  }

  return (
    <div
      className="relative mt-8 h-[178px] max-w-[360px] sm:h-[195px] lg:h-[180px] lg:max-w-none xl:h-[205px]"
      aria-hidden="true"
    >
      {/* Elsődleges kép: szélesebb, nyugodtabb alap. */}
      <figure className="group absolute left-0 top-0 h-[76%] w-[78%] overflow-hidden border border-[#123F45]/15 bg-white shadow-[0_16px_34px_rgba(18,63,69,0.07)]">
        <Image
          src={images[0].src}
          alt=""
          fill
          sizes="(min-width: 1280px) 265px, (min-width: 1024px) 220px, 280px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          style={{ objectPosition: images[0].objectPosition }}
        />
      </figure>

      {/* Másodlagos kép: kisebb, enyhén ráúszik az első képre. */}
      <figure className="group absolute bottom-0 right-0 h-[58%] w-[54%] overflow-hidden border-[5px] border-[#F7F5EF] bg-white shadow-[0_14px_30px_rgba(18,63,69,0.12)]">
        <Image
          src={images[1].src}
          alt=""
          fill
          sizes="(min-width: 1280px) 185px, (min-width: 1024px) 150px, 195px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          style={{ objectPosition: images[1].objectPosition }}
        />
      </figure>

      <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-16 bg-[#01497c]/70" />
    </div>
  );
}

export default function ServiceReferences({ service, t }: Props) {
  return (
    <section
      id="references"
      className="scroll-mt-64 bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-24">
          <header className="border-t-2 border-[#01497c] pt-5">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#01497c]">
                  {t.eyebrow}
                </span>
                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {t.description}
                </p>
              </div>

              <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#123F45]/8">
                03
              </span>
            </div>

            <ProjectMosaic service={service} />
          </header>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>

            <div className="mt-10 border-t border-[#123F45]/15">
              {t.items.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group grid gap-4 border-b border-[#123F45]/15 py-7 md:grid-cols-[64px_minmax(220px,0.9fr)_minmax(0,1.1fr)] md:gap-8 lg:py-8"
                >
                  <span className="pt-1 text-xs font-bold tracking-[0.18em] text-[#01497c]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#01497c]">
                      {item.meta}
                    </span>
                    <h3 className="mt-2 text-xl font-bold leading-7 text-[#123F45] transition-colors group-hover:text-[#01497c] sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-2xl leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
