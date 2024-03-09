import { Layout } from "@components/layout";
import HeroVideo from "./hero-video";
import { Container } from "@components/container";
import { MediaResponse } from "@/modules/common/types/common";

export type HeroCarouselProps = {
  with_container?: boolean;
  first_text?: string;
  second_text?: string;
  video?: {
    overlay?: MediaResponse;
    youtube_video_hash: string;
  };
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  with_container,
  first_text,
  second_text,
  video,
}) => {
  return (
    <Container enabled={with_container}>
      <Layout className="text-white-56 sm:grid-cols-2 mb-8">
        {!!first_text && (
          <div className="w-full">
            <p>{first_text}</p>
          </div>
        )}
        {!!second_text && (
          <div className="w-full flex sm:justify-end">
            <p>{second_text}</p>
          </div>
        )}
      </Layout>
      {!!video && <HeroVideo {...video} />}
    </Container>
  );
};

export default HeroCarousel;
