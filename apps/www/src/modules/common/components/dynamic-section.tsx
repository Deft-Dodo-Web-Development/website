import React from "react";
import { ComponentsOptions } from "../types/components";
import HeroCarousel from "@/modules/home/components/hero-carousel";
import AboutUs from "@/modules/home/widgets/about-us";
import BrandsMarquee from "@/modules/home/widgets/brands-marquee";
import Clients from "@/modules/home/widgets/clients";
import FeaturedServices from "@/modules/home/widgets/featured-services";
import HeroSection from "@/modules/home/widgets/hero";
import KeyFactsSection from "@/modules/home/widgets/key-facts";
import OurProcess from "@/modules/home/widgets/our-process";
import { Projects } from "@/modules/home/widgets/projects";
import Team from "@/modules/home/widgets/team";
import Testimonials from "@/modules/home/widgets/testimonials";
import Experience from "./experience";
import { Separator } from "./separator";
import Contact from "@/modules/home/widgets/contact";
import ImageWithText from "./image-with-text";
import RichEditor from "./rich-editor";
import { Image } from "./image";
import DisplayVideo from "./display-video";
import PictureByDevice from "@/modules/work/widgets/picture-by-device";

export type DynamicSectionProps = {
  content: ComponentsOptions;
};

const DynamicSection: React.FC<DynamicSectionProps> = ({ content }) => {
  switch (content.__component) {
    case "home.heading":
      return <HeroSection {...content} />;
    case "home.heading-carousel":
      return <HeroCarousel {...content} />;
    case "home.clients":
      return <Clients {...content} />;
    case "home.brands-marquee":
      return <BrandsMarquee {...content} />;
    case "home.about-us":
      return <AboutUs {...content} />;
    case "home.projects":
      return <Projects {...content} />;
    case "home.services":
      return <FeaturedServices {...content} />;
    case "home.key-facts":
      return <KeyFactsSection {...content} />;
    case "home.step-by-step":
      return <OurProcess {...content} />;
    case "home.testimonials":
      return <Testimonials {...content} />;
    case "home.team":
      return <Team {...content} />;
    case "home.contact-us":
      return <Contact {...content} />;
    case "home.experience":
      return <Experience {...content} />;
    case "common.separator":
      return (
        <Separator
          container={content.with_container}
          style={{
            marginBottom: `${content.margin_button}px`,
            marginTop: `${content.margin_top}px`,
          }}
        />
      );
    case "common.spacer":
      return (
        <div
          style={{
            height: `${content.height}px`,
          }}
        />
      );
    case "common.image-with-text":
      return (
        <ImageWithText {...content} />
      )
    case "common.rich-editor":
      return (
        <RichEditor {...content} />
      )
    case "common.image":
      return (
        <Image {...content} />
      )
    case "common.display-video":
      return (
        <DisplayVideo {...content} />
      )
    case "common.pic-by-device":
      return (
        <PictureByDevice {...content} />
      )
    default:
      return <div>Component not found</div>;
  }
};

export default DynamicSection;
