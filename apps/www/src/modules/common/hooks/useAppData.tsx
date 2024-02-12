/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { i18n, type Locale } from "@/i18n-config";

type AppDataState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const useStore = create<AppDataState>((set) => ({
  locale: i18n.defaultLocale,
  setLocale: (locale) => set({ locale }),
}));

export default useStore;
