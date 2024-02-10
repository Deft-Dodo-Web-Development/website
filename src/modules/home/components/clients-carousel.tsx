"use client";

import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@components/carousel";

export type Image = {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
};

export type ClientsCarouselProps = {
  images: Image[];
};

const ClientsCarousel: React.FC<ClientsCarouselProps> = ({ images }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-36">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 pl-36 xl:basis-1/5 flex items-center justify-center"
          >
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className="object-contain max-w-[215px] max-h-[48px] w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ClientsCarousel;
