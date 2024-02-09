import { HeaderNav } from "../components/header-nav";
import { HeaderCTA } from "../components/header-cta";
import { HeaderMobileMenu } from "../components/header-mobile";
import { HeaderContainer } from "../components/header-container";
import HeaderBranding from "../components/header-branding";

const Header = () => {
  return (
    <HeaderContainer>
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
