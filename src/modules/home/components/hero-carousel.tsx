import { Layout } from "@components/layout";
import HeroVideo from "./hero-video";

const HeroCarousel = () => {
  return (
    <div>
      <Layout className="text-white-56 sm:grid-cols-2 mb-8">
        <div className="w-full">
          <p>Elevate your e-commerce vision?</p>
        </div>
        <div className="w-full flex sm:justify-end">
          <p>We are here for you.</p>
        </div>
      </Layout>
      <HeroVideo />
    </div>
  );
};

export default HeroCarousel;
