"use client";
import useAppData from "@hooks/useAppData";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HeaderBranding: React.FC<{ className?: string }> = ({ className }) => {
  const { locale } = useAppData();

  return (
    <h1 className={cn("text-lg", className)}>
      <Link href={`/${locale}`} className="space-x-1">
        <span className="font-bold">DeftDodo</span>
        <span className="font-thin">®</span>
      </Link>
    </h1>
  );
};

export default HeaderBranding;
