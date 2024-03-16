import HeroCarousel from "../components/hero-carousel";
import HeroSection from "../widgets/hero";
import { Separator } from "@components/separator";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";
import { Projects } from "../widgets/projects";
import Experience from "@/modules/common/components/experience";
import FooterSetup from "@/modules/common/utilities/footer-setup";
import { getHomePageData, getSeoPageData } from "../actions/home-page";
import KeyFactsSection from "../widgets/key-facts";
import FeaturedServices from "../widgets/featured-services";
import Testimonials from "../widgets/testimonials";
import OurProcess from "../widgets/our-process";
import Team from "../widgets/team";
import Contact from "../widgets/contact";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoRes = await getSeoPageData();

  if (!seoRes || !seoRes?.data?.attributes?.seo) return {};

  const seo = seoRes.data.attributes.seo;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: seo.preventIndexing ? "noindex, nofollow" : "index, follow",
  };
};

const HomePage = async () => {
  const response = await getHomePageData();

  if (!response || !response.data) {
    return null;
  }

  const pageContent = response?.data?.attributes?.pageContent;

  if (!pageContent) {
    console.log("No page content found");
    return null;
  }

  return (
    <>
      {pageContent.map((content, index) => {
        switch (content.__component) {
          case "home.heading":
            return <HeroSection key={index} {...content} />;
          case "home.heading-carousel":
            return <HeroCarousel key={index} {...content} />;
          case "home.clients":
            return <Clients key={index} {...content} />;
          case "home.about-us":
            return <AboutUs key={index} {...content} />;
          case "home.projects":
            return <Projects key={index} {...content} />;
          case "home.services":
            return <FeaturedServices key={index} {...content} />;
          case "home.key-facts":
            return <KeyFactsSection key={index} {...content} />;
          case "home.step-by-step":
            return <OurProcess key={index} {...content} />;
          case "home.testimonials":
            return <Testimonials key={index} {...content} />;
          case "home.team":
            return <Team key={index} {...content} />;
          case "home.contact-us":
            return <Contact key={index} {...content} />;
          case "home.experience":
            return <Experience key={index} {...content} />;
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
          case "common.spacer":
            return (
              <div
                style={{
                  height: `${content.height}px`,
                }}
              />
            );
          default:
            return null;
        }
      })}

      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
