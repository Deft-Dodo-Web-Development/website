import { Container } from "@components/container";
import { Layout } from "@components/layout";
import AboutUsAnimated from "./about-us-animated";

type AboutUsProps = {
  container?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const AboutUs: React.FC<AboutUsProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <Layout>
        <AboutUsAnimated />
      </Layout>
    </Container>
  );
};

export default AboutUs;
