"use client";

import { useState, useEffect } from "react";

export type HeaderContainerProps = {
  children?: React.ReactNode;
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`uppercase ${isScrolled ? "py-4 headerWithBlur border-b-2" : "py-9"} border-white-16 fixed top-0 z-50 transition-all duration-300 w-full`}
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
