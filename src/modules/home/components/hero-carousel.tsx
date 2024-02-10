import { Layout } from "@components/layout";
import HeroVideo from "./hero-video";
import { Container } from "@components/container";

export type HeroCarouselProps = {
  container?: boolean;
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ container }) => {
  return (
    <Container enabled={container}>
      <Layout className="text-white-56 sm:grid-cols-2 mb-8">
        <div className="w-full">
          <p>Elevate your e-commerce vision?</p>
        </div>
        <div className="w-full flex sm:justify-end">
          <p>We are here for you.</p>
        </div>
      </Layout>
      <HeroVideo />
    </Container>
  );
};

export default HeroCarousel;
