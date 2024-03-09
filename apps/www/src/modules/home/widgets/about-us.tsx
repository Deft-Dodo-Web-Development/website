import { Container } from "@components/container";
import { Layout } from "@components/layout";
import AboutUsAnimated, {
  type AboutUsProps,
} from "../components/about-us-animated";

const AboutUs: React.FC<AboutUsProps> = (props) => {
  const { with_container: container } = props;

  return (
    <Container enabled={container}>
      <Layout>
        <AboutUsAnimated {...props} />
      </Layout>
    </Container>
  );
};

export default AboutUs;
