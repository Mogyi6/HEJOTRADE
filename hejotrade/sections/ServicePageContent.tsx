import { getDictionary, type Locale } from "@/lib/i18n";
import { getPath } from "@/lib/routes";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceCapabilities from "@/components/services/ServiceCapabilities";
import ServiceReferences from "@/components/services/ServiceReferences";
import ServiceCapacity from "@/components/services/ServiceCapacity";
import ServiceContact from "@/components/services/ServiceContact";

export type ServiceRoute =
  | "mining"
  | "energy"
  | "technology"
  | "generalContracting";

type Props = {
  locale: Locale;
  service: ServiceRoute;
};

export default function ServicePageContent({ locale, service }: Props) {
  const t = getDictionary(locale);
  const content = t[service];

  return (
    <div className="flex flex-col overflow-hidden bg-[#F7F5EF]">
      <ServiceHero service={service} t={content.hero} />
      <ServiceOverview t={content.overview} />
      <ServiceCapabilities service={service} t={content.capabilities} />
      <ServiceReferences service={service} t={content.references} />
      <ServiceCapacity t={content.capacity} />
      <ServiceContact
        href={getPath(locale, "contact")}
        t={content.contactCta}
      />
    </div>
  );
}
