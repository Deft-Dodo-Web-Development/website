import { HeaderNav } from "../components/header-nav";
import { HeaderCTA } from "../components/header-cta";
import { HeaderMobileMenu } from "../components/header-mobile";
import { HeaderContainer } from "../components/header-container";
import HeaderBranding from "../components/header-branding";
import { Locale } from "@/i18n-config";

export type HeaderProps = {
  lang: Locale;
};

const Header: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <HeaderContainer lang={lang}>
      <HeaderBranding />
      <HeaderDesktopContent />
      <HeaderMobileMenu />
    </HeaderContainer>
  );
};

const HeaderDesktopContent = () => (
  <>
    <HeaderNav className="hidden md:flex" />
    <HeaderCTA className="hidden md:flex" />
  </>
);

export default Header;
