"use client";
import useAppData from "@hooks/useAppData";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

const HeaderNav: React.FC<{ className?: string }> = ({ className }) => {
  const { locale } = useAppData();

  return (
    <nav>
      <ul className={cn("flex items-center gap-8", className)}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={`/${locale}${item.link}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderNav };
