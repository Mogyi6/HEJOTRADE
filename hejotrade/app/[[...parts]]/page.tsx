import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n";
import { getRouteFromParts } from "@/lib/routes";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutPageContent from "@/sections/AboutPageContent";
import ContactPageContent from "@/sections/ContactPageContent";
import ServicePageContent from "@/sections/ServicePageContent";

type PageProps = {
  params: Promise<{
    parts?: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { parts } = await params;

  const resolved = getRouteFromParts(parts);

  if (!resolved) {
    return {};
  }

  const { locale, route } = resolved;
  const t = getDictionary(locale);

  const metadataMap: Record<
    string,
    {
      title: string;
      description: string;
    }
  > = {
    about: {
      title: t.about.title,
      description: t.about.description,
    },

    mining: {
      title: t.mining.title,
      description: t.mining.description,
    },

    energy: {
      title: t.energy.title,
      description: t.energy.description,
    },

    technology: {
      title: t.technology.title,
      description: t.technology.description,
    },

    generalContracting: {
      title: t.generalContracting.title,
      description: t.generalContracting.description,
    },

    contact: {
      title: t.contact.title,
      description: t.contact.description,
    },
  };

  const pageMetadata = metadataMap[route];

  if (!pageMetadata) {
    return {
      title: "HEJŐTRADE",
      description:
        "HEJŐTRADE Kft. – bányászati, energetikai, mérnöki, építőipari és technológiai szolgáltatások.",
    };
  }

  return {
    title: `${pageMetadata.title} | HEJŐTRADE`,
    description: pageMetadata.description,

    openGraph: {
      title: `${pageMetadata.title} | HEJŐTRADE`,
      description: pageMetadata.description,
      type: "website",
      locale: locale === "hu" ? "hu_HU" : "en_GB",
      siteName: "HEJŐTRADE",
    },

    twitter: {
      card: "summary_large_image",
      title: `${pageMetadata.title} | HEJŐTRADE`,
      description: pageMetadata.description,
    },
  };
}

export default async function CatchAllPage({ params }: PageProps) {
  const { parts } = await params;

  const resolved = getRouteFromParts(parts);

  if (!resolved) {
    notFound();
  }

  const { locale, route } = resolved;

  return (
    <>
      <Nav locale={locale} />

      <div className="mx-auto w-full max-w-[1600px]">
        {route === "about" && <AboutPageContent locale={locale} />}

        {route === "mining" && (
          <ServicePageContent locale={locale} service="mining" />
        )}

        {route === "energy" && (
          <ServicePageContent locale={locale} service="energy" />
        )}

        {route === "technology" && (
          <ServicePageContent locale={locale} service="technology" />
        )}

        {route === "generalContracting" && (
          <ServicePageContent
            locale={locale}
            service="generalContracting"
          />
        )}

        {route === "contact" && <ContactPageContent locale={locale} />}
      </div>

      <Footer locale={locale} />
    </>
  );
}
