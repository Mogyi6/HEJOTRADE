"use client";

import Link from "next/link";
import Image from "next/image";

import { getDictionary, type Locale } from "@/lib/i18n";
import { getPath, type RouteKey } from "@/lib/routes";

type Props = {
  locale: Locale;
};

type FooterLink = {
  key:
    | "about"
    | "mining"
    | "energy"
    | "technology"
    | "generalContracting"
    | "contact";
  route: RouteKey;
};

export default function Footer({ locale }: Props) {
  const t = getDictionary(locale);

  const navigation: FooterLink[] = [
    {
      key: "about",
      route: "about",
    },
    {
      key: "mining",
      route: "mining",
    },
    {
      key: "energy",
      route: "energy",
    },
    {
      key: "technology",
      route: "technology",
    },
    {
      key: "generalContracting",
      route: "generalContracting",
    },
    {
      key: "contact",
      route: "contact",
    },
  ];

  return (
    <footer className="bg-[#123F45] text-white">

      {/* ====================================================== */}
      {/* FŐ FOOTER */}
      {/* ====================================================== */}

      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10 xl:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">

          {/* ================================================== */}
          {/* CÉGINFORMÁCIÓ */}
          {/* ================================================== */}

          <div>
            <Link
              href={getPath(locale, "about")}
              className="inline-flex items-center"
              aria-label={t.nav.logoAria}
            >
              <Image
                src="/logo-left.jpg"
                alt={t.nav.logoAlt}
                width={190}
                height={70}
                className="h-auto w-[170px] object-contain"
              />
            </Link>

            <h2 className="mt-5 text-xl font-semibold tracking-wide">
              {t.company.name} Kft.
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-white/65">
              {t.company.subtitle}
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              {t.footer.companyDescription}
            </p>

            {/* KRÉM ACCENT */}
            <div className="mt-6 h-px w-16 bg-[#E8DCC4]" />

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/40">
              {t.footer.since}
            </p>
          </div>

          {/* ================================================== */}
          {/* NAVIGÁCIÓ */}
          {/* ================================================== */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8DCC4]">
              {t.footer.navigationTitle}
            </h3>

            <nav
              className="mt-6"
              aria-label={t.nav.mainNavigation}
            >
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={getPath(locale, item.route)}
                      className="group flex items-center text-sm text-white/65 transition hover:text-white"
                    >
                      {/* KRÉM HOVER VONAL */}
                      <span className="mr-3 h-px w-0 bg-[#E8DCC4] transition-all duration-300 group-hover:w-4" />

                      <span>
                        {t.nav.items[item.key]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ================================================== */}
          {/* ELÉRHETŐSÉG */}
          {/* ================================================== */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E8DCC4]">
              {t.footer.contactTitle}
            </h3>

            <div className="mt-6 space-y-6">

              {/* ================================================== */}
              {/* SZÉKHELY */}
              {/* ================================================== */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {t.footer.headOffice}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  1135 Budapest
                  <br />
                  Fáy u. 93.
                </p>
              </div>

              {/* ================================================== */}
              {/* BUDAPESTI IRODA */}
              {/* ================================================== */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {t.footer.budapestOffice}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  1144 Budapest
                  <br />
                  Füredi u. 74–76.
                </p>
              </div>

              {/* ================================================== */}
              {/* MISKOLCI IRODA */}
              {/* ================================================== */}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {t.footer.miskolcOffice}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  3519 Miskolc
                  <br />
                  Kócsag u. 12.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* CÉGADATOK */}
      {/* ====================================================== */}

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">

            {/* ================================================== */}
            {/* CÉGADATOK */}
            {/* ================================================== */}

            <div className="flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:gap-6">

              <span>
                {t.footer.companyRegistration}{" "}
                <span className="text-white/60">
                  01-09-338908
                </span>
              </span>

              <span>
                {t.footer.taxNumber}{" "}
                <span className="text-white/60">
                  11580063-2-41
                </span>
              </span>

            </div>

            {/* ================================================== */}
            {/* JOGI LINKEK */}
            {/* ================================================== */}

            <div className="flex items-center gap-5 text-xs text-white/40">

              <Link
                href="#"
                className="transition hover:text-[#E8DCC4]"
              >
                {t.footer.privacy}
              </Link>

              <span className="h-3 w-px bg-white/15" />

              <Link
                href="#"
                className="transition hover:text-[#E8DCC4]"
              >
                {t.footer.legalNotice}
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* COPYRIGHT */}
      {/* ====================================================== */}

      <div className="border-t border-white/5 bg-black/10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-6 py-4 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-10 xl:px-16">

          <span>
            © {new Date().getFullYear()} {t.company.name} Kft.
          </span>

          <span>
            {t.footer.rights}
          </span>

        </div>
      </div>

    </footer>
  );
}
