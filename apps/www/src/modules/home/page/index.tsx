import React from "react";
import HeroCarousel from "../components/hero-carousel";
import Services from "../widgets/services";
import { Separator } from "@components/separator";
import Heading from "../widgets/heading";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";
import { Projects } from "../widgets/projects";
import BannerMarquee from "@/modules/common/components/banner-marquee";
import Experience from "@/modules/common/components/experience";
import FooterSetup from "@/modules/common/utilities/footer-setup";
import { getHomePageData } from "../actions/home-page";

const HomePage = async () => {
  const data = await getHomePageData();
  const pageContent = data.data.attributes.pageContent;

  return (
    <>
      {pageContent.map((content, index) => {
        switch (content.__component) {
          case "home.heading":
            return (
              <Heading
                key={index}
                {...content}
                container={content.with_container}
              />
            );
          case "common.separator":
            return <Separator key={index} container={content.with_container} />;
          case "home.heading-carousel":
            return <HeroCarousel key={index} {...content} />;
          default:
            return null;
        }
      })}
      {/* <Separator className="my-12" container /> */}
      <Clients container className="mt-28" />
      <Separator className="my-28" />
      <AboutUs container />
      <Separator className="mt-28 mb-10" container />
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
