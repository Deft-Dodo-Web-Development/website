import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../components/services";
import { Separator } from "@components/separator";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <Separator className="mb-2" />
      <Services />
    </>
  );
};

export default HomePage;
