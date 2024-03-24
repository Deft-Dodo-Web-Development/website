import { Container } from "@components/container";
import { Layout } from "@components/layout";
import AboutUsAnimated, {
  AboutUsAnimatedProps,
} from "../components/about-us-animated";

type AboutUsProps = AboutUsAnimatedProps;

const AboutUs: React.FC<AboutUsProps> = (props) => {
  const { with_container: container } = props;
  return (
    <Container enabled={container}>
      <Layout className="my-8">
        <AboutUsAnimated {...props} />
      </Layout>
    </Container>
  );
};

export default AboutUs;
