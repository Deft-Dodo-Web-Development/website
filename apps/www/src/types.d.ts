import type { Locale } from "./i18n-config";

export type Params = { lang: Locale };

export type DefaultPageProps = {
  children: React.ReactNode;
  params: Params;
};

// Force release 3
