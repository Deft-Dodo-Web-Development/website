"use client";

import useAppData from "@hooks/useAppData";
import { Button } from "./button";

const HeaderCTA: React.FC<{ className?: string }> = ({ className }) => {
  const { locale } = useAppData();

  return (
    <div className={className}>
      <Button icon="ArrowUpRight" href={`/${locale}/contact`}>
        Contact
      </Button>
    </div>
  );
};

export { HeaderCTA };
