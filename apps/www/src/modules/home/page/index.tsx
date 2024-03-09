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
import FeaturedServices from "../widgets/featured-services";
import { type ServiceCardProps } from "@/modules/services/components/service-card";
import OurProcess from "../widgets/our-process";
import { ProcessItem } from "../components/our-process-animated";

// this is a reference array of featured services

const services: ServiceCardProps[] = [
  {
    icon: "BarChart2",
    title: "CRO Audit",
    description:
      "A comprehensive assessment of your Shopify e-commerce store's performance with the goal of identifying opportunities to improve its conversion rates. Conversion rate optimization focuses on increasing the percentage of website.",
    slug: "cro-audit",
    variant: "primary",
  },
  {
    icon: "Layout",
    title: "Theme Customization",
    description:
      "Refers to the process of modifying and tailoring the design, layout, features, and functionality of a pre-existing Shopify theme to better align with a store owner's brand, vision, and specific business needs.",
    slug: "theme-customization",
  },
  {
    icon: "TrendingUp",
    title: "SEO & Digital Marketing Integration",
    description:
      "Involve strategies and techniques to enhance the visibility, reach, and effectiveness of your Shopify e-commerce store in search engines and various online marketing channels.",
    slug: "seo-digital-marketing-integration",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Improving the speed, responsiveness, and overall efficiency of your Shopify e-commerce store. The goal of performance optimization is to create a seamless and enjoyable user experience.",
    slug: "performance-optimization",
  },
];

const process: ProcessItem[] = [
  {
    number: "01",
    title: "Research & Plan",
    description:
      "Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.",
  },
  {
    number: "02",
    title: "Mock Up",
    description:
      "Creating a mock up is the step of the design process most people recognize — it’s the most visual part of the process In-depth sketching and brainstorming.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement the solution (often with the help of other professionals like programmers, printers, or manufacturers). Revise the solution as technical issues.",
  },
];

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
      <AboutUs
        id={1}
        __component="home.about-us"
        with_container={true}
        heading={{
          id: 1,
          title: "About Us",
          sub_title: "We are a creative agency",
        }}
        content="Deft Dodo is a design & develop agency of the future with 120+ successful projects in their portfolio."
      />
      <Separator className="my-28" />
      <KeyFactsSection container />
      <Separator className="mt-28 mb-10" />
      <Projects container />
      <Separator className="mt-28 mb-2" container />
      <FeaturedServices
        container
        heading="Know our services"
        subHeading="Featured Services"
        description="We offer a range of services to help you grow your business."
        services={services}
        viewAllLink="/services"
      />
      <OurProcess
        id={1}
        __component="home.our-process"
        with_container={true}
        heading={{
          id: 1,
          title: "Our Process",
        }}
        items={process}
      />

      <Services container />
      <Separator className="mt-24 mb-36" container />
      <BannerMarquee />
      <Experience />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
