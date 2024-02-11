"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/modules/common/components/sheet";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { HeaderCTA } from "./header-cta";
import { HeaderNav } from "./header-nav";
import { usePathname } from "next/navigation";

const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <Sheet onOpenChange={(open) => setIsOpen(open)} open={isOpen}>
        <SheetTrigger asChild>
          <button
            className="hover:scale-105"
            title="Open menu"
            aria-label="Open menu"
          >
            {!isOpen && <Menu size={24} aria-hidden />}
          </button>
        </SheetTrigger>
        <HeaderMobileContent />
      </Sheet>
    </div>
  );
};

const HeaderMobileContent = () => (
  <SheetContent className="md:hidden bg-dark max-w-xs pt-16 pb-40  items-center justify-between flex flex-col gap-20">
    <HeaderNav className="flex-col justify-start" />
    <HeaderCTA />
  </SheetContent>
);

export { HeaderMobileMenu };
