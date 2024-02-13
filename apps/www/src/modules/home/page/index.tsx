import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../widgets/services";
import { Separator } from "@components/separator";
import Heading from "../widgets/heading";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";
import { Projects } from "../widgets/projects";
import FooterSetup from "@/modules/common/utilities/footer-setup";

const HomePage = () => {
  return (
    <>
      <Heading container />
      <Separator className="my-12" container />
      <HeroCarousel container />
      <Clients container className="mt-28" />
      <Separator className="my-28" />
      <AboutUs container />
      <Separator className="mt-28 mb-10" container />
      <Projects container />
      <Separator className="mt-28 mb-2" container />
      <Services container />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
