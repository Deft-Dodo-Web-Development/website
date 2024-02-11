import { Separator } from "@components/separator";
import AboutUsHeading from "../widgets/heading";
import Content from "../widgets/content";
import Team from "../widgets/team";
import ServiceSection from "../widgets/services-section";

const AboutPage = () => {
  return (
    <>
      <AboutUsHeading container />
      <Separator className="mb-28 mt-14" container />
      <Content container />
      <Separator className="mt-28 mb-8" container />
      <Team container />
      <Separator className="mt-28 mb-8" container />
      {/* Here should be DeftDodo Banner [DDT-16] */}
      <ServiceSection container />
    </>
  );
};

export default AboutPage;
