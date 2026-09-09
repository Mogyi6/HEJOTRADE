import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactLocations from "@/components/contact/ContactLocations";
import ContactCompanyData from "@/components/contact/ContactCompanyData";

import { getDictionary, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function ContactPageContent({ locale }: Props) {
  const t = getDictionary(locale);

  return (
    <div className="flex flex-col">
      <ContactHero t={t.contact.hero} />

      <ContactInfo t={t.contact.info} />

      <ContactLocations t={t.contact.locations} />

      <ContactCompanyData t={t.contact.companyData} />
    </div>
  );
}