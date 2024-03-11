"use client";

import { Locale } from "@/i18n-config";
import { useState, useEffect } from "react";
import useAppData from "@hooks/useAppData";
import { cn } from "@/lib/utils";

export type HeaderContainerProps = {
  children?: React.ReactNode;
  lang: Locale;
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  children,
  lang,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const setLang = useAppData((state) => state.setLocale);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setIsScrolled(isScrolled);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => setLang(lang), [lang, setLang]);

  return (
    <header
      className={cn(
        "uppercase fixed top-0 z-50 transition-all duration-300 w-full border-white-16 bg-dark/40",
        isScrolled ? "py-4 headerWithBlur border-b-2" : "py-9"
      )}
    >
      <div className="container flex items-center justify-between min-h-10">
        {children}
      </div>

      <style jsx>{`
        .headerWithBlur::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          backdrop-filter: blur(10px);
          z-index: -1;
        }
      `}</style>
    </header>
  );
};

export { HeaderContainer };
