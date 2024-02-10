import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../components/services";
import { Separator } from "@components/separator";
import HeadingSection from "../components/heading";
import Clients from "../components/clients";
import AboutUs from "../components/about-us";

const HomePage = () => {
  return (
    <>
      <HeadingSection container />
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
