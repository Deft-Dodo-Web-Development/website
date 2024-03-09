import { type HeroBannerProps } from "../components/hero-banner";
import HeroBanner from "../components/hero-banner";
import ParticlesBackground from "../components/particles-background";

const HeroSection: React.FC<HeroBannerProps> = ({
  with_container: container,
  heading_bold: headingBold,
  heading_thing: headingThin,
  description,
  cta,
  href,
}: HeroBannerProps) => {
  return (
    <section className="relative">
      <HeroBanner
        with_container={container}
        heading_bold={headingBold}
        heading_thing={headingThin}
        description={description}
        cta={cta}
        href={href}
      />
      <div className="absolute inset-0 h-full pointer-events-none">
        <ParticlesBackground />
      </div>
    </section>
  );
};

export default HeroSection;
