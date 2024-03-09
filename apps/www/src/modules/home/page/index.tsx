import HeroCarousel from "../components/hero-carousel";
import HeroSection from "../widgets/hero";
import { Separator } from "@components/separator";
import Clients from "../widgets/clients";
import AboutUs from "../widgets/about-us";
import { Projects } from "../widgets/projects";
import BannerMarquee from "@/modules/common/components/banner-marquee";
import Experience from "@/modules/common/components/experience";
import FooterSetup from "@/modules/common/utilities/footer-setup";
import { getHomePageData } from "../actions/home-page";
import KeyFactsSection from "../widgets/key-facts";
import FeaturedServices from "../widgets/featured-services";
import OurProcess from "../widgets/our-process";

const HomePage = async () => {
  const data = await getHomePageData();
  const pageContent = data.data.attributes.pageContent;

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

      <Separator className="mt-24 mb-36" container />
      <BannerMarquee />
      <Experience />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
