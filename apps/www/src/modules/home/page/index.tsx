import React from "react";
import HeroCarousel from "../components/hero-carousel";
import HeroSection from "../widgets/hero";
import Services from "../widgets/services";
import { Separator } from "@components/separator";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";
import { Projects } from "../widgets/projects";
import BannerMarquee from "@/modules/common/components/banner-marquee";
import Experience from "@/modules/common/components/experience";
import FooterSetup from "@/modules/common/utilities/footer-setup";
import { getHomePageData } from "../actions/home-page";
import KeyFactsSection from "../widgets/key-facts";

const HomePage = async () => {
  const data = await getHomePageData();
  const pageContent = data.data.attributes.pageContent;

  return (
    <>
      {pageContent.map((content, index) => {
        switch (content.__component) {
          case "home.heading":
            return <HeroSection key={index} {...content} />;
          case "common.separator":
            return (
              <Separator
                key={index}
                container={content.with_container}
                style={{
                  marginBottom: `${content.margin_button}px`,
                  marginTop: `${content.margin_top}px`,
                }}
              />
            );
          case "home.heading-carousel":
            return <HeroCarousel key={index} {...content} />;
          case "home.clients":
            return <Clients key={index} {...content} />;
          case "common.spacer":
            return (
              <div
                style={{
                  height: `${content.height}px`,
                }}
              />
            );
          case "home.about-us":
            return <AboutUs key={index} {...content} />;
          case "home.projects":
            return <Projects key={index} {...content} />;
          default:
            return null;
        }
      })}

      {/* <AboutUs
        id={1}
        __component="home.about-us"
        with_container={true}
        heading={{
          id: 1,
          title: "About Us",
          sub_title: "We are a creative agency",
        }}
        content="Deft Dodo is a design & develop agency of the future with 120+ successful projects in their portfolio."
      /> */}
      {/* <Separator className="my-28" /> */}
      <KeyFactsSection container />
      <Separator className="mt-28 mb-10" />
      {/* <Projects container /> */}
      <Separator className="mt-28 mb-2" container />
      {/*<FeaturedServices
        container
        heading="Know our services"
        subHeading="Featured Services"
        description="We offer a range of services to help you grow your business."
        services={services}
        viewAllLink="/services"
      /> */}
      <Services container />
      <Separator className="mt-24 mb-36" container />
      <BannerMarquee />
      <Experience />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
