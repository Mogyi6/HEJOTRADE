"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import Image from "next/image";

import {
  usePathname,
} from "next/navigation";

import {
  getDictionary,
  type Locale,
} from "@/lib/i18n";

import {
  getPath,
} from "@/lib/routes";

import LanguageSwitcher from "./LanguageSwitcher";


type Props = {
  locale: Locale;
};


type MenuItem = {
  key:
    | "about"
    | "mining"
    | "energy"
    | "technology"
    | "generalContracting"
    | "contact";

  href: string;
};


export default function Nav({
  locale,
}: Props) {

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);


  const pathname =
    usePathname();


  const t =
    getDictionary(locale);


  /* ========================================================= */
  /* MOBIL MENÜ – BODY SCROLL LOCK */
  /* ========================================================= */

  useEffect(() => {

    document.body.style.overflow =
      mobileMenuOpen
        ? "hidden"
        : "";


    return () => {
      document.body.style.overflow =
        "";
    };

  }, [mobileMenuOpen]);


  /* ========================================================= */
  /* ÚTVONALVÁLTÁSKOR MENÜ BEZÁRÁSA */
  /* ========================================================= */

  useEffect(() => {

    setMobileMenuOpen(false);

  }, [pathname]);


  /* ========================================================= */
  /* MOBIL MENÜ BEZÁRÁSA */
  /* ========================================================= */

  const closeMobileMenu = () => {

    setMobileMenuOpen(false);

  };


  /* ========================================================= */
  /* MENÜPONTOK */
  /* ========================================================= */

  const menuItems: MenuItem[] = [
    {
      key: "about",
      href: getPath(
        locale,
        "about"
      ),
    },

    {
      key: "mining",
      href: getPath(
        locale,
        "mining"
      ),
    },

    {
      key: "energy",
      href: getPath(
        locale,
        "energy"
      ),
    },

    {
      key: "technology",
      href: getPath(
        locale,
        "technology"
      ),
    },

    {
      key: "generalContracting",
      href: getPath(
        locale,
        "generalContracting"
      ),
    },

    {
      key: "contact",
      href: getPath(
        locale,
        "contact"
      ),
    },
  ];


  /* ========================================================= */
  /* ACTIVE MENÜPONT */
  /* ========================================================= */

  const isActive = (
    href: string
  ) => {

    const normalize = (
      path: string
    ) => {

      if (
        path.length > 1 &&
        path.endsWith("/")
      ) {

        return path.slice(
          0,
          -1
        );

      }

      return path;

    };


    return (
      normalize(pathname) ===
      normalize(href)
    );

  };


  return (
    <>

      {/* ====================================================== */}
      {/* FIX FEJLÉC */}
      {/* ====================================================== */}

      <header
        role="banner"
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          bg-white
          shadow-sm
        "
      >

        {/* ================================================== */}
        {/* FELSŐ FEJLÉC */}
        {/* ================================================== */}

        <div
          className="
            border-b
            border-gray-200
            bg-white
          "
        >

          <div
            className="
              mx-auto
              flex
              h-[84px]
              w-full
              max-w-[1600px]
              items-center
              px-4

              sm:h-[96px]
              sm:px-6

              lg:grid
              lg:h-[110px]
              lg:grid-cols-[1fr_auto_1fr]
              lg:gap-4
              lg:px-8

              xl:gap-8
              xl:px-12

              2xl:px-16
            "
          >

            {/* ================================================= */}
            {/* BAL OLDALI LOGÓ */}
            {/* CSAK DESKTOPON */}
            {/* ================================================= */}

            <div
              className="
                hidden
                min-w-0
                items-center
                justify-start
                lg:flex
              "
            >

              <Link
                href={getPath(
                  locale,
                  "about"
                )}
                aria-label={
                  t.nav.logoAria
                }
                onClick={
                  closeMobileMenu
                }
                className="
                  flex
                  min-w-0
                  items-center
                "
              >

                <Image
                  src="/logo-left.jpg"
                  alt={t.nav.logoAlt}
                  width={150}
                  height={80}
                  priority
                  sizes="
                    (max-width: 1280px) 100px,
                    (max-width: 1536px) 125px,
                    150px
                  "
                  className="
                    h-auto
                    w-[95px]
                    max-w-full
                    object-contain
                    transition-all
                    duration-300

                    min-[1100px]:w-[105px]

                    xl:w-[120px]

                    min-[1400px]:w-[135px]

                    2xl:w-[150px]
                  "
                />

              </Link>

            </div>


            {/* ================================================= */}
            {/* KÖZÉPSŐ CÉGNÉV */}
            {/* ================================================= */}

            <div
              className="
                min-w-0
                flex-1
                pr-4
                text-left

                lg:flex-none
                lg:px-3
                lg:text-center

                xl:px-6

                2xl:px-10
              "
            >

              <Link
                href={getPath(
                  locale,
                  "about"
                )}
                onClick={
                  closeMobileMenu
                }
                className="
                  group
                  block
                  min-w-0
                "
              >

                {/* ============================================= */}
                {/* CÉGNÉV */}
                {/* ============================================= */}

                <div
                  className="
                    truncate
                    whitespace-nowrap
                    text-lg
                    font-bold
                    tracking-[0.07em]
                    text-[#01497c]
                    transition-opacity
                    duration-200
                    group-hover:opacity-75

                    min-[400px]:text-xl

                    sm:text-2xl
                    sm:tracking-[0.09em]

                    lg:text-[24px]
                    lg:tracking-[0.10em]

                    xl:text-[27px]

                    2xl:text-3xl
                    2xl:tracking-[0.12em]
                  "
                >
                  {t.company.name}
                </div>


                {/* ============================================= */}
                {/* ALCÍM */}
                {/* ============================================= */}

                <div
                  className="
                    mt-0.5
                    max-w-[240px]
                    truncate
                    whitespace-nowrap
                    text-[9px]
                    font-medium
                    tracking-wide
                    text-gray-500

                    min-[400px]:max-w-[280px]
                    min-[400px]:text-[10px]

                    sm:mt-1
                    sm:max-w-[380px]
                    sm:text-[11px]

                    lg:max-w-[460px]
                    lg:text-[11px]

                    xl:max-w-[540px]
                    xl:text-xs

                    2xl:text-sm
                  "
                >
                  {t.company.subtitle}
                </div>

              </Link>

            </div>


            {/* ================================================= */}
            {/* JOBB OLDAL */}
            {/* ================================================= */}

            <div
              className="
                flex
                shrink-0
                items-center
                justify-end
                gap-2

                sm:gap-3

                lg:min-w-0
                lg:gap-3

                xl:gap-4

                2xl:gap-5
              "
            >

              {/* =============================================== */}
              {/* NYELVVÁLASZTÓ – CSAK DESKTOP */}
              {/* =============================================== */}

              <div
                className="
                  hidden
                  lg:block
                "
              >

                <LanguageSwitcher
                  currentLocale={
                    locale
                  }
                />

              </div>


              {/* =============================================== */}
              {/* JOBB OLDALI LOGÓ */}
              {/* CSAK DESKTOPON */}
              {/* =============================================== */}

              <Link
                href={getPath(
                  locale,
                  "about"
                )}
                aria-label={
                  t.nav.logoAria
                }
                onClick={
                  closeMobileMenu
                }
                className="
                  hidden
                  min-w-0
                  items-center
                  lg:flex
                "
              >

                <Image
                  src="/logo-right.jpg"
                  alt={t.nav.logoAlt}
                  width={150}
                  height={80}
                  priority
                  sizes="
                    (max-width: 1280px) 95px,
                    (max-width: 1536px) 125px,
                    150px
                  "
                  className="
                    h-auto
                    w-[90px]
                    max-w-full
                    object-contain
                    transition-all
                    duration-300

                    min-[1100px]:w-[100px]

                    xl:w-[115px]

                    min-[1400px]:w-[130px]

                    2xl:w-[150px]
                  "
                />

              </Link>


              {/* =============================================== */}
              {/* HAMBURGER */}
              {/* MOBIL + TABLET */}
              {/* =============================================== */}

              <button
                type="button"
                aria-label={
                  mobileMenuOpen
                    ? t.nav.closeMenu
                    : t.nav.openMenu
                }
                aria-expanded={
                  mobileMenuOpen
                }
                aria-controls="mobile-menu"
                onClick={() =>
                  setMobileMenuOpen(
                    (prev) => !prev
                  )
                }
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#123F45]/10
                  text-[#01497c]
                  transition-all
                  duration-200

                  hover:border-[#01497c]/25
                  hover:bg-[#01497c]/[0.05]

                  sm:h-11
                  sm:w-11

                  lg:hidden
                "
              >

                <div
                  className="
                    relative
                    h-[18px]
                    w-[22px]
                  "
                >

                  {/* FELSŐ VONAL */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-[22px]
                      rounded-full
                      bg-current
                      transition-all
                      duration-300

                      ${
                        mobileMenuOpen
                          ? "translate-y-[8px] rotate-45"
                          : ""
                      }
                    `}
                  />


                  {/* KÖZÉPSŐ VONAL */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-[8px]
                      h-[2px]
                      w-[22px]
                      rounded-full
                      bg-current
                      transition-all
                      duration-300

                      ${
                        mobileMenuOpen
                          ? "scale-x-0 opacity-0"
                          : "scale-x-100 opacity-100"
                      }
                    `}
                  />


                  {/* ALSÓ VONAL */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-[16px]
                      h-[2px]
                      w-[22px]
                      rounded-full
                      bg-current
                      transition-all
                      duration-300

                      ${
                        mobileMenuOpen
                          ? "-translate-y-[8px] -rotate-45"
                          : ""
                      }
                    `}
                  />

                </div>

              </button>

            </div>

          </div>

        </div>


        {/* ================================================== */}
        {/* ALSÓ DESKTOP NAVIGÁCIÓ */}
        {/* ================================================== */}

        <div
          className="
            hidden
            bg-[#123F45]
            lg:block
          "
        >

          <nav
            aria-label={
              t.nav.mainNavigation
            }
            className="
              mx-auto
              flex
              h-[58px]
              w-full
              max-w-[1600px]
              items-center
              justify-center
              px-8

              xl:px-12

              2xl:px-16
            "
          >

            <div
              className="
                flex
                h-full
                w-full
                max-w-[1200px]
                items-center
                justify-between
                gap-2

                xl:gap-5

                2xl:gap-8
              "
            >

              {menuItems.map(
                (item) => {

                  const active =
                    isActive(
                      item.href
                    );


                  return (

                    <Link
                      key={item.key}
                      href={item.href}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      className="
                        group
                        relative
                        flex
                        h-full
                        min-w-0
                        items-center
                        justify-center
                        whitespace-nowrap
                        px-1.5
                        text-[12px]
                        font-medium
                        text-white/80
                        transition-colors
                        duration-300
                        hover:text-white

                        min-[1100px]:text-[13px]

                        xl:px-2
                        xl:text-sm

                        2xl:px-3
                        2xl:text-[15px]
                      "
                    >

                      <span
                        className="
                          relative
                        "
                      >

                        {
                          t.nav.items[
                            item.key
                          ]
                        }


                        {/* ======================================= */}
                        {/* ACTIVE / HOVER VONAL */}
                        {/* ======================================= */}

                        <span
                          className={`
                            pointer-events-none
                            absolute
                            -bottom-[8px]
                            left-0
                            h-[2px]
                            w-full
                            origin-center
                            rounded-full
                            bg-[#E8DCC4]
                            transition-transform
                            duration-300
                            ease-out

                            ${
                              active
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }
                          `}
                        />

                      </span>

                    </Link>

                  );

                }
              )}

            </div>

          </nav>

        </div>

      </header>


      {/* ====================================================== */}
      {/* MOBIL / TABLET HÁTTÉR OVERLAY */}
      {/* ====================================================== */}

      <div
        aria-hidden="true"
        onClick={
          closeMobileMenu
        }
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          backdrop-blur-[2px]
          transition-all
          duration-300

          lg:hidden

          ${
            mobileMenuOpen
              ? `
                pointer-events-auto
                opacity-100
              `
              : `
                pointer-events-none
                opacity-0
              `
          }
        `}
      />


      {/* ====================================================== */}
      {/* MOBIL / TABLET MENÜ */}
      {/* ====================================================== */}

      <div
        id="mobile-menu"
        className={`
          fixed
          left-0
          right-0
          top-[84px]
          z-50
          px-3
          transition-all
          duration-300
          ease-out

          sm:top-[96px]
          sm:px-5

          lg:hidden

          ${
            mobileMenuOpen
              ? `
                pointer-events-auto
                translate-y-0
                opacity-100
              `
              : `
                pointer-events-none
                -translate-y-3
                opacity-0
              `
          }
        `}
      >

        <div
          className="
            mx-auto
            max-h-[calc(100dvh-100px)]
            max-w-2xl
            overflow-y-auto
            rounded-2xl
            border
            border-white/10
            bg-[#123F45]
            shadow-[0_25px_70px_rgba(0,0,0,0.3)]

            sm:max-h-[calc(100dvh-112px)]
          "
        >

          {/* ================================================== */}
          {/* MOBIL MENÜ FEJLÉC */}
          {/* ================================================== */}

          <div
            className="
              border-b
              border-white/10
              px-5
              py-4
            "
          >

            <div
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#E8DCC4]/70
              "
            >
              HEJŐTRADE
            </div>

          </div>


          {/* ================================================== */}
          {/* MOBIL MENÜPONTOK */}
          {/* ================================================== */}

          <nav
            aria-label={
              t.nav.mobileNavigation
            }
            className="
              flex
              flex-col
              p-2
            "
          >

            {menuItems.map(
              (item) => {

                const active =
                  isActive(
                    item.href
                  );


                return (

                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={
                      closeMobileMenu
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-[15px]
                      font-medium
                      transition-all
                      duration-200

                      sm:px-5
                      sm:py-4
                      sm:text-base

                      ${
                        active
                          ? `
                            bg-white/[0.09]
                            text-white
                          `
                          : `
                            text-white/75
                            hover:bg-white/[0.06]
                            hover:text-white
                          `
                      }
                    `}
                  >

                    {/* ========================================= */}
                    {/* BAL RÉSZ */}
                    {/* ========================================= */}

                    <span
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      {/* ACTIVE JELÖLŐ */}

                      <span
                        className={`
                          h-1.5
                          rounded-full
                          bg-[#E8DCC4]
                          transition-all
                          duration-300

                          ${
                            active
                              ? "w-5"
                              : "w-1.5 group-hover:w-3"
                          }
                        `}
                      />


                      {/* MENÜ SZÖVEG */}

                      <span>
                        {
                          t.nav.items[
                            item.key
                          ]
                        }
                      </span>

                    </span>


                    {/* ========================================= */}
                    {/* JOBB NYÍL */}
                    {/* ========================================= */}

                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        text-white/30
                        transition-all
                        duration-200
                        group-hover:translate-x-1
                        group-hover:text-white/60
                      "
                    >

                      <path
                        d="
                          M7 4.5
                          L12.5 10
                          L7 15.5
                        "
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                    </svg>

                  </Link>

                );

              }
            )}

          </nav>


          {/* ================================================== */}
          {/* MOBIL NYELVVÁLASZTÓ */}
          {/* ================================================== */}

          <div
            className="
              border-t
              border-white/10
              px-5
              py-4
            "
          >

            <LanguageSwitcher
              currentLocale={
                locale
              }
              variant="mobile"
              onNavigate={
                closeMobileMenu
              }
            />

          </div>

        </div>

      </div>


      {/* ====================================================== */}
      {/* FIX HEADER ALATTI HELY */}
      {/* ====================================================== */}

      <div
        aria-hidden="true"
        className="
          h-[84px]

          sm:h-[96px]

          lg:h-[168px]
        "
      />

    </>
  );
}