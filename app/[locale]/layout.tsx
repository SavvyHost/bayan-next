import LayoutPages from '@/components/molecules/Layout/LayoutPages';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import '../../src/styles/animation.css';
import './globals.css';

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
