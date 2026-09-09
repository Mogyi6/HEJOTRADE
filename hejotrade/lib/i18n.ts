import hu from '@/lang/hu.json';
import en from '@/lang/en.json';

export const locales = ['hu', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'hu';

const dictionaries = {
  hu,
  en,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.hu;
}
