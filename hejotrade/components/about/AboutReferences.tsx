"use client";

import { useEffect, useState } from "react";

type Reference = {
  title: string;
  category: string;
  description: string;
  images?: string[];
};

type Props = {
  t: {
    eyebrow: string;
    title: string;
    imagePlaceholder: string;
    items: Record<string, Reference>;
  };
};

function ZoomIcon({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-white/90 text-[#123F45] shadow-xl ${
        small ? "h-9 w-9" : "h-10 w-10"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={small ? "h-4 w-4" : "h-[18px] w-[18px]"}
      >
        <circle
          cx="11"
          cy="11"
          r="6.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M16 16l4 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8.5 11h5M11 8.5v5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function AboutReferences({ t }: Props) {
  const references = Object.values(t.items);

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // ESC billentyűvel bezárás
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Modal megnyitásakor ne lehessen a háttérben scrollozni
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const openImage = (src: string, alt: string) => {
    setSelectedImage({
      src,
      alt,
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* HEADER */}
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#01497c]">
              {t.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#123F45] sm:text-4xl lg:text-5xl">
              {t.title}
            </h2>
          </div>

          {/* REFERENCES */}
          <div className="mt-10 border-t border-[#123F45]/15">
            {references.map((reference, index) => {
              const images = reference.images ?? [];

              return (
                <article
                  key={reference.title}
                  className="grid gap-7 border-b border-[#123F45]/15 py-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_330px]"
                >
                  {/* =========================
                      SZÖVEG
                     ========================= */}

                  <div className="min-w-0">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-bold tracking-[0.18em] text-[#01497c]/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-8 bg-[#01497c]/35" />

                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#01497c]">
                        {reference.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold leading-tight text-[#123F45] sm:text-3xl">
                      {reference.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                      {reference.description}
                    </p>
                  </div>

                  {/* =========================
                      KIS KÉPGALÉRIA / MOZAIK
                     ========================= */}

                  {images.length > 0 && (
                    <div className="w-full max-w-[330px] justify-self-start lg:justify-self-end">
                      <div className="overflow-hidden rounded-2xl bg-[#123F45] p-1.5 shadow-[0_10px_30px_rgba(18,63,69,0.10)]">
                        {/* 1 KÉP */}
                        {images.length === 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              openImage(images[0], reference.title)
                            }
                            className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[0.8rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8DCC4]"
                          >
                            <img
                              src={images[0]}
                              alt={reference.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                            />

                            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                              <ZoomIcon />
                            </div>
                          </button>
                        )}

                        {/* 2 KÉP */}
                        {images.length === 2 && (
                          <div className="grid aspect-[16/10] grid-cols-2 gap-1.5">
                            {images.map((image, imageIndex) => (
                              <button
                                key={image}
                                type="button"
                                onClick={() =>
                                  openImage(
                                    image,
                                    `${reference.title} ${imageIndex + 1}`
                                  )
                                }
                                className="group relative block overflow-hidden rounded-[0.8rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8DCC4]"
                              >
                                <img
                                  src={image}
                                  alt={`${reference.title} ${imageIndex + 1}`}
                                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                                />

                                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                                  <ZoomIcon small />
                                </div>
                              </button>
                            ))}
                          </div>
                        )}

                        {/* 3 VAGY TÖBB KÉP – KOMPAKT MOZAIK */}
                        {images.length >= 3 && (
                          <div className="grid aspect-[16/10] grid-cols-[1.65fr_1fr] gap-1.5">
                            {/* BAL OLDALI FŐ KÉP */}
                            <button
                              type="button"
                              onClick={() =>
                                openImage(images[0], `${reference.title} 1`)
                              }
                              className="group relative block overflow-hidden rounded-[0.8rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8DCC4]"
                            >
                              <img
                                src={images[0]}
                                alt={`${reference.title} 1`}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                              />

                              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                                <ZoomIcon />
                              </div>
                            </button>

                            {/* JOBB OLDALI KÉPEK */}
                            <div className="grid grid-rows-2 gap-1.5">
                              {images.slice(1, 3).map((image, imageIndex) => (
                                <button
                                  key={image}
                                  type="button"
                                  onClick={() =>
                                    openImage(
                                      image,
                                      `${reference.title} ${imageIndex + 2}`
                                    )
                                  }
                                  className="group relative block overflow-hidden rounded-[0.8rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8DCC4]"
                                >
                                  <img
                                    src={image}
                                    alt={`${reference.title} ${imageIndex + 2}`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                                  />

                                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                                    <ZoomIcon small />
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          KÉP MODAL
         ========================= */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          {/* Bezárás */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Kép bezárása"
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 sm:top-8"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Kép */}
          <div className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
