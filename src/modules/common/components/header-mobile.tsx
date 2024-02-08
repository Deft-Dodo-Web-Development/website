"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { HeaderCTA } from "./header-cta";
import { HeaderNav } from "./header-nav";

const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:scale-105"
        title={isOpen ? "Close menu" : "Open menu"}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {!isOpen ? <Menu size={24} aria-hidden /> : <X size={24} aria-hidden />}
      </button>
      {isOpen && <HeaderMobileContent />}
    </div>
  );
};

const HeaderMobileContent = () => (
  <>
    <HeaderNav />
    <HeaderCTA />
  </>
);

export { HeaderMobileMenu };
