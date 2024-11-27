import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@widgets/header";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Footer from "@widgets/footer";
import { bisonFont } from "@/modules/common/assets/fonts";
import Styles from "@/modules/common/components/styles";
import { Toaster } from "@/modules/common/components/sonner";
import { getFooterData } from "@/modules/common/actions/footer";
import { FacebookPixelEvents } from "@/modules/common/components/pixel-events";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  const metadata = dictionary["common"].metadata;

  return {
    title: metadata.title,
  };
}

export default async function RootLayout({ children, params: { lang } }: Props) {
  const footerData = await getFooterData();
  const footer = footerData?.data?.attributes;

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-dark text-white`}>
        <Styles bisonFont={bisonFont} />
        <Header lang={lang} />
        <main className="mt-28">{children}</main>
        <Footer {...footer} />
        <Toaster />
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  );
}
