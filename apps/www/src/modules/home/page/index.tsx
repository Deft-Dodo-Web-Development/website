import React from "react";
import HeroCarousel from "../components/hero-carousel";
import HeroSection from "../widgets/hero";
import Services from "../widgets/services";
import { Separator } from "@components/separator";
import Heading from "../widgets/heading";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";
import { Projects } from "../widgets/projects";
import BannerMarquee from "@/modules/common/components/banner-marquee";
import Experience from "@/modules/common/components/experience";
import FooterSetup from "@/modules/common/utilities/footer-setup";
import KeyFactsSection from "../widgets/key-facts";

const HomePage = () => {
  return (
    <>
      <HeroSection
        container
        headingBold="We are creative"
        headingThin="Agency"
        description="Deft Dodo is a design & develop agency of the future with 120+ successful projects in their portfolio."
        cta="Book a demo"
        href="/contact"
      />
      <Heading container />
      <Separator className="my-12" container />
      <HeroCarousel container />
      <Clients container className="mt-28" />
      <Separator className="my-28" />
      <AboutUs container />
      <Separator className="my-28" />
      <KeyFactsSection container />
      <Separator className="mt-28 mb-10" />
      <Projects container />
      <Separator className="mt-28 mb-2" container />
      <Services container />
      <Separator className="mt-24 mb-36" container />
      <BannerMarquee />
      <Experience />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
