import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../components/services";
import { Separator } from "@components/separator";
import HeadingSection from "../components/heading";

const HomePage = () => {
  return (
    <>
      <HeadingSection container />
      <Separator className="my-12" container />
      <HeroCarousel container />
      <Separator className="my-28" />
      <Services container />
    </>
  );
};

export default HomePage;
