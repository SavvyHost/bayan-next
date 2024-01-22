import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../src/styles/animation.css";
import Navbar from "@/components/organisms/navbar/NavBar";
import Footer from "@/components/organisms/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "اكاديمية البيان",
  description:
    "معنا.. تخطَّ حواجز اللغة. منصة علمني العربية منصة تعليمية تهدف لتعليم اللغة العربية لغير الناطقين بها، عبر تطبيقات الهواتف الذكية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
