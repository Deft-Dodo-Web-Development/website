import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../widgets/services";
import { Separator } from "@components/separator";
import Heading from "../widgets/heading";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";

const HomePage = () => {
  return (
    <>
      <Heading container />
      <Separator className="my-12" container />
      <HeroCarousel container />
      <Clients container className="mt-28" />
      <Separator className="my-28" />
      <AboutUs container />
      <Separator className="my-28" container />
      <Services container />
    </>
  );
};

export default HomePage;
