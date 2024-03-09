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
import { type TestimonialCardProps } from "../components/testimonial-card";
import OurProcess from "../widgets/our-process";
import { type TeamCardProps } from "../components/team-card";
import Team from "../widgets/team";

const testimonials: TestimonialCardProps[] = [
  {
    quote: "I am looking forward to working with the Boltzshift again.",
    paragraph: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    name: "Dora Dybala",
    designation: "CEO & Founder of Company",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
    companyImage: "https://placehold.co/140x32.png",
  },
  {
    quote: "Anticipating the next chapter of collaboration with Boltzshift",
    paragraph: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    name: "Ryan Dyson",
    designation: "CTO of Company",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
    companyImage: "https://placehold.co/140x32.png",
  }
];

const teamMembers: TeamCardProps[] = [
  {
    name: "John Doe",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
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
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
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
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU",
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
  }
];

const HomePage = async () => {
  const response = await getHomePageData();

  if (!response || !response.data) {
    return null;
  }

  const pageContent = response.data.attributes.pageContent;

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
      <Separator className="my-28" />
      <Team
        with_container
        heading={{
          title: "Meet the Team",
          sub_title: "Our Team"
        }}
        members={teamMembers}
      />
      <Testimonials
        container
        heading="Testimonials"
        testimonials={testimonials}
      />
      <Separator className="mt-24 mb-36" container />
      <BannerMarquee />
      <Experience />
      <FooterSetup variant="basic" />
    </>
  );
};

export default HomePage;
