import { create } from "zustand";
import type { Locale } from "@/i18n-config";

type AppDataState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const useStore = create<AppDataState>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
}));

export default useStore;
