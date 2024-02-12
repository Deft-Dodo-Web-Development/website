/* eslint-disable no-unused-vars */
import { create } from "zustand";

export type FooterVariants = "basic" | "complex" | "minimal";

type FooterState = {
  variant: FooterVariants;
  setVariant: (variant: FooterVariants) => void;
};

const useFooter = create<FooterState>((set) => ({
  variant: "basic",
  setVariant: (variant) => set({ variant }),
}));

export default useFooter;
