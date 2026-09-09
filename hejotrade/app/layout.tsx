import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hejotrade.hu'),

  title: {
    default: 'HEJŐTRADE Kft.',
    template: '%s | HEJŐTRADE Kft.',
  },

  description:
    'A HEJŐTRADE Kft. bányászati, energetikai, mérnöki és szolgáltatási tevékenységekkel foglalkozó magyar vállalkozás.',

  keywords: [
    'HEJŐTRADE',
    'HEJŐTRADE Kft.',
    'bányászat',
    'energetika',
    'mérnöki szolgáltatás',
    'ipari szolgáltatás',
  ],

  authors: [
    {
      name: 'HEJŐTRADE Kft.',
    },
  ],

  creator: 'HEJŐTRADE Kft.',

  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://www.hejotrade.hu',
    siteName: 'HEJŐTRADE Kft.',
    title: 'HEJŐTRADE Kft.',
    description:
      'Bányászati, energetikai, mérnöki és szolgáltatási tevékenységek.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
