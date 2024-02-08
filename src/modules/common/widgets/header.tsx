"use client";

import Link from "next/link";
import { Button } from "../components/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
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
        <HeaderBranding />
        <HeaderDesktopContent />
        <HeaderMobileMenu />
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

const HeaderBranding: React.FC<{ className?: string }> = ({ className }) => (
  <h1 className={cn("text-lg", className)}>
    <Link href="/" className="space-x-1">
      <span className="font-bold">DeftDodo</span>
      <span className="font-thin">®</span>
    </Link>
  </h1>
);

const HeaderDesktopContent = () => (
  <>
    <HeaderNav className="hidden md:flex" />
    <HeaderCTA className="hidden md:flex" />
  </>
);

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

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Work",
    link: "/work",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "About",
    link: "/about",
  },
];

const HeaderNav: React.FC<{ className?: string }> = ({ className }) => (
  <nav>
    <ul className={cn("flex items-center gap-8", className)}>
      {navItems.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

const HeaderCTA: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <Button icon="ArrowUpRight" href="/contact">
      Contact
    </Button>
  </div>
);

const HeaderMobileContent = () => (
  <>
    <HeaderNav />
    <HeaderCTA />
  </>
);

export default Header;
