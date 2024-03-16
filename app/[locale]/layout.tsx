import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../../src/styles/animation.css';
import Navbar from '@/components/organisms/navbar/NavBar';
import Footer from '@/components/organisms/Footer/Footer';
import LayoutPages from '@/components/molecules/Layout/LayoutPages';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'اكاديمية البيان',
  description:
    'معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} dir='rtl'>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutPages>{children}</LayoutPages>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
