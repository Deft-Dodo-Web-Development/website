import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../components/services";
import { Separator } from "@components/separator";
import HeadingSection from "../components/heading";

const HomePage = () => {
  return (
    <>
      <HeadingSection />
      <Separator className="my-12" />
      <HeroCarousel />
      <Separator className="mb-2" />
      <Services />
    </>
  );
};

export default HomePage;
