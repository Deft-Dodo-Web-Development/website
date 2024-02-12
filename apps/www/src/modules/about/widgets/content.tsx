import { Container } from "@/modules/common/components/container";
import { Layout } from "@components/layout";

export type ContentProps = {
  container?: boolean;
};

const Content: React.FC<ContentProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <Layout>
        <div className="lg:text-lg text-white-56 lg:max-w-[528px]">
          <p>
            A dynamic and innovative Shopify developer agency dedicated to
            reshaping the way brands engage, sell, and succeed in the digital
            landscape.
          </p>
        </div>
        <div className="text-xl lg:text-3xl space-y-10">
          <p>
            We craft immersive online shopping experiences that leave lasting
            impressions. With a team of passionate developers, creative
            designers, and strategic thinkers, we are committed to pushing the
            boundaries of e-commerce excellence.
          </p>
          <p>
            We are committed to empowering businesses, small and large, to
            thrive in the digital age. Whether you&apos;re a startup with big
            dreams or an established brand seeking to refresh your online
            presence, [Agency Name] is here to make your e-commerce journey
            seamless, exciting, and profitable.
          </p>
        </div>
      </Layout>
    </Container>
  );
};

export default Content;
