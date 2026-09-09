"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import type {
  Locale,
} from "@/lib/i18n";

import {
  getPath,
  getRouteFromParts,
} from "@/lib/routes";


type Props = {
  currentLocale: Locale;

  variant?: "header" | "mobile";

  onNavigate?: () => void;
};


const options: {
  locale: Locale;
  short: string;
  label: string;
}[] = [
  {
    locale: "hu",
    short: "HU",
    label: "Magyar",
  },
  {
    locale: "en",
    short: "EN",
    label: "English",
  },
];


export default function LanguageSwitcher({
  currentLocale,
  variant = "header",
  onNavigate,
}: Props) {

  const [open, setOpen] =
    useState(false);

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const pathname =
    usePathname();

  const router =
    useRouter();


  /* ========================================================= */
  /* NYELVVÁLTÁS */
  /* ========================================================= */

  const handleSelect = (
    nextLocale: Locale
  ) => {

    if (
      nextLocale === currentLocale
    ) {
      setOpen(false);
      return;
    }


    const parts =
      (pathname || "/")
        .split("/")
        .filter(Boolean);


    const resolved =
      getRouteFromParts(parts);


    if (!resolved) {

      router.push(
        nextLocale === "en"
          ? "/en"
          : "/"
      );

      setOpen(false);

      onNavigate?.();

      return;
    }


    router.push(
      getPath(
        nextLocale,
        resolved.route
      )
    );


    setOpen(false);

    onNavigate?.();
  };


  /* ========================================================= */
  /* KATTINTÁS KÍVÜL / ESC */
  /* ========================================================= */

  useEffect(() => {

    const handlePointerDown = (
      event: MouseEvent
    ) => {

      if (
        !wrapperRef.current?.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    };


    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if (
        event.key === "Escape"
      ) {
        setOpen(false);
      }
    };


    document.addEventListener(
      "mousedown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, []);


  /* ========================================================= */
  /* MOBIL VÁLTOZAT */
  /* ========================================================= */

  if (
    variant === "mobile"
  ) {

    return (
      <div className="w-full">

        <div
          className="
            mb-3
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white/45
          "
        >
          Language / Nyelv
        </div>


        <div
          className="
            grid
            grid-cols-2
            gap-1
            rounded-xl
            border
            border-white/10
            bg-white/[0.06]
            p-1
          "
        >

          {options.map(
            ({
              locale,
              short,
              label,
            }) => {

              const active =
                locale ===
                currentLocale;


              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() =>
                    handleSelect(
                      locale
                    )
                  }
                  className={`
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    transition-all
                    duration-200

                    ${
                      active
                        ? `
                          bg-white
                          font-semibold
                          text-[#123F45]
                          shadow-sm
                        `
                        : `
                          font-medium
                          text-white/70
                          hover:bg-white/10
                          hover:text-white
                        `
                    }
                  `}
                >

                  <span>
                    {short}
                  </span>

                  <span
                    className={`
                      hidden
                      text-xs
                      sm:inline
                      ${
                        active
                          ? "text-[#123F45]/60"
                          : "text-white/40"
                      }
                    `}
                  >
                    {label}
                  </span>

                </button>
              );

            }
          )}

        </div>

      </div>
    );
  }


  /* ========================================================= */
  /* DESKTOP / HEADER VÁLTOZAT */
  /* ========================================================= */

  const current =
    options.find(
      (item) =>
        item.locale ===
        currentLocale
    ) ?? options[0];


  return (
    <div
      ref={wrapperRef}
      className="
        relative
        z-[60]
      "
    >

      {/* ======================================================= */}
      {/* FŐ GOMB */}
      {/* ======================================================= */}

      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Language selector"
        onClick={() =>
          setOpen(
            (prev) => !prev
          )
        }
        className="
          group
          flex
          h-10
          cursor-pointer
          items-center
          gap-2
          whitespace-nowrap
          rounded-full
          border
          border-[#123F45]/15
          bg-[#F7F5EF]
          px-3.5
          text-sm
          font-semibold
          text-[#123F45]
          transition-all
          duration-200
          hover:border-[#01497c]/30
          hover:bg-[#01497c]/[0.05]
        "
      >

        {/* Globe */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="
            h-[17px]
            w-[17px]
            text-[#01497c]
          "
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="
              M3.5 12h17
              M12 3
              c2.2 2.5 3.3 5.5 3.3 9
              S14.2 18.5 12 21
              M12 3
              C9.8 5.5 8.7 8.5 8.7 12
              S9.8 18.5 12 21
            "
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>


        <span>
          {current.short}
        </span>


        {/* Nyíl */}
        <svg
          className={`
            h-3.5
            w-3.5
            text-[#123F45]/50
            transition-transform
            duration-200
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >

          <path
            d="
              M5 7.5
              L10 12.5
              L15 7.5
            "
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </svg>

      </button>


      {/* ======================================================= */}
      {/* DROPDOWN */}
      {/* ======================================================= */}

      <div
        role="menu"
        className={`
          absolute
          right-0
          top-full
          mt-2
          w-[170px]
          origin-top-right
          overflow-hidden
          rounded-xl
          border
          border-[#123F45]/10
          bg-white
          p-1.5
          shadow-[0_18px_45px_rgba(18,63,69,0.15)]
          transition-all
          duration-200

          ${
            open
              ? `
                pointer-events-auto
                translate-y-0
                scale-100
                opacity-100
              `
              : `
                pointer-events-none
                -translate-y-1
                scale-[0.98]
                opacity-0
              `
          }
        `}
      >

        {options.map(
          ({
            locale,
            short,
            label,
          }) => {

            const active =
              locale ===
              currentLocale;


            return (
              <button
                key={locale}
                type="button"
                role="menuitem"
                onClick={() =>
                  handleSelect(
                    locale
                  )
                }
                className={`
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-2.5
                  text-left
                  transition
                  duration-200

                  ${
                    active
                      ? `
                        bg-[#123F45]/[0.06]
                        text-[#123F45]
                      `
                      : `
                        text-[#123F45]/70
                        hover:bg-[#123F45]/[0.045]
                        hover:text-[#123F45]
                      `
                  }
                `}
              >

                <div className="flex items-center gap-3">

                  <span
                    className="
                      w-6
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#01497c]
                    "
                  >
                    {short}
                  </span>


                  <span
                    className="
                      text-sm
                      font-medium
                    "
                  >
                    {label}
                  </span>

                </div>


                {active && (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="
                      h-4
                      w-4
                      text-[#01497c]
                    "
                    aria-hidden="true"
                  >
                    <path
                      d="
                        M4.5 10.2
                        L8.1 13.5
                        L15.5 6.5
                      "
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

              </button>
            );

          }
        )}

      </div>

    </div>
  );
}