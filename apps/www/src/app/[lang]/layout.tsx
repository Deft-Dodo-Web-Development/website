import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@widgets/header";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Footer from "@widgets/footer";
import { bisonFont } from "@/modules/common/assets/fonts";

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
      <body className={`bg-dark text-white`}>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: ${bisonFont.style.fontFamily};
            font-weight: 700;
          }
        `}</style>
        <Header lang={lang} />
        <main className="mt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
