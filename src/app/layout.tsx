import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://velmora.local'),
  title: { default: 'Velmora — Кованые изделия и ограждения', template: '%s | Velmora' },
  description: 'Velmora — изготовление кованых перил, ограждений, ворот, балконов и навесов под ключ.',
  openGraph: {
    title: 'Velmora',
    description: 'Премиальные кованые изделия с монтажом под ключ.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
