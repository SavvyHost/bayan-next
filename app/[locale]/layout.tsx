import LayoutPages from "@/components/molecules/Layout/LayoutPages";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import "../../src/styles/animation.css";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "اكاديمية البيان",
  description:
    "معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.",
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
    <html lang={locale} dir="rtl">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JHCVD723FZ"
        ></Script>
        <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JHCVD723FZ');
      
    `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV7PP3KT"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutPages>{children}</LayoutPages>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
