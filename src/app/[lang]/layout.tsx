import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/modules/common/widgets/header";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

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

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-dark text-white`}>
        <Header lang={lang} />
        <main className="mt-28">{children}</main>
      </body>
    </html>
  );
}
