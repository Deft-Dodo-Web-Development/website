"use client";

import Link from "next/link";
import { Button } from "../components/button";
import { useState, useEffect } from "react";

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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`uppercase ${isScrolled ? "py-4 headerWithBlur border-b-2" : "py-9"} border-white-16 fixed top-0 z-50 transition-all duration-300 w-full`}
    >
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-lg">
            <Link href="/" className="space-x-1">
              <span className="font-bold">DeftDodo</span>
              <span className="font-thin">®</span>
            </Link>
          </h1>
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button icon="ArrowUpRight" href="/contact">
            Contact
          </Button>
        </div>
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

export default Header;
