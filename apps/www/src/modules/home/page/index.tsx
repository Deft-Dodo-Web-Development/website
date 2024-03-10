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
import Testimonials from "../widgets/testimonials";
import OurProcess from "../widgets/our-process";
import { type TeamCardProps } from "../components/team-card";
import Team from "../widgets/team";
import Contact from "../widgets/contact";

const teamMembers: TeamCardProps[] = [
  {
    name: "John Doe",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
    position: "CEO",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com",
      },
      {
        icon: "linkedin",
        link: "https://linkedin.com",
      },
      {
        icon: "twitter",
        link: "https://twitter.com",
      },
      {
        icon: "facebook",
        link: "https://facebook.com",
      },
    ],
  },
  {
    name: "Jane Doe",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
    position: "COO",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com",
      },
      {
        icon: "linkedin",
        link: "https://linkedin.com",
      },
      {
        icon: "twitter",
        link: "https://twitter.com",
      },
      {
        icon: "facebook",
        link: "https://facebook.com",
      },
    ],
  },
  {
    name: "John Doe",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
    position: "CEO",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com",
      },
      {
        icon: "linkedin",
        link: "https://linkedin.com",
      },
      {
        icon: "twitter",
        link: "https://twitter.com",
      },
      {
        icon: "facebook",
        link: "https://facebook.com",
      },
    ],
  },
];

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
      <Separator className="my-28" />
      <Team
        with_container
        heading={{
          title: "Meet the Team",
          sub_title: "Our Team",
        }}
        members={teamMembers}
      />
      <Separator className="mt-24 mb-36" container />
      <Contact
        with_container
        heading={{
          title: "Contact Us",
          sub_title: "Get in touch",
        }}
        description="Whether you're starting from scratch, looking to revamp your existing store, or seeking custom e-commerce solutions, we've got you covered."
      />
      <BannerMarquee />
      <Experience />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
