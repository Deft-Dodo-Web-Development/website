"use client";

import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@components/carousel";
import { AppConfig } from "@/config/app.config";
import { MediaResponse } from "@/modules/common/types/common";

export type ImageType = {
  width: number;
  height: number;
  image: MediaResponse;
};

export type ClientsCarouselProps = {
  images: ImageType[];
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
        {images.map((item, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 pl-36 xl:basis-1/5 flex items-center justify-center"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, bottom: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, bottom: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
            >
              <Image
                src={`${AppConfig.strapi.url}${item.image.data.attributes.url}`}
                width={item.width}
                height={item.height}
                alt={
                  item.image.data.attributes.alternativeText || "Client Logo"
                }
                className="object-contain max-w-[215px] max-h-[48px] w-full"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ClientsCarousel;
