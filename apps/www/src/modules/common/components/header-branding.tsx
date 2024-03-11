"use client";
import useAppData from "@hooks/useAppData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Brand } from "./brand";

const HeaderBranding: React.FC<{ className?: string }> = ({ className }) => {
  const { locale } = useAppData();

  return (
    <Link
      href={`/${locale}`}
      className="space-x-1"
      title="Home"
      aria-label="Home"
    >
      <Brand className={cn("w-[60px] h-auto", className)} />
    </Link>
  );
};

export default HeaderBranding;
