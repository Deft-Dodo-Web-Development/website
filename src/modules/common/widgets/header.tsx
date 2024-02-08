import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeaderNav } from "../components/header-nav";
import { HeaderCTA } from "../components/header-cta";
import { HeaderMobileMenu } from "../components/header-mobile";
import { HeaderContainer } from "../components/header-container";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBranding />
      <HeaderDesktopContent />
      <HeaderMobileMenu />
    </HeaderContainer>
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

export default Header;
