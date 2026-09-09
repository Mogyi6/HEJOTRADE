import { getDictionary, type Locale } from "@/lib/i18n";

import AboutHero from "@/components/about/AboutHero";
import AboutIntroduction from "@/components/about/AboutIntroduction";
import AboutHistory from "@/components/about/AboutHistory";
import AboutActivities from "@/components/about/AboutActivities";
import AboutReferences from "@/components/about/AboutReferences";
import AboutPartners from "@/components/about/AboutPartners";
import AboutContact from "@/components/about/AboutContact";

type Props = {
  locale: Locale;
};

export default function AboutPageContent({ locale }: Props) {
  const t = getDictionary(locale);

  return (
    <main className="flex flex-col overflow-hidden bg-[#F7F5EF]">
      <AboutHero t={t.about.hero} />

      <AboutIntroduction t={t.about.introduction} />

      <AboutHistory t={t.about.history} />

      <AboutActivities t={t.about.activities} />

      <AboutReferences t={t.about.references} />

      <AboutPartners t={t.about.partners} />

      <AboutContact t={t.about.contactCta} />
    </main>
  );
}