"use client";

import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { Heading } from "@components/heading";
import { Carousel, CarouselContent, CarouselItem } from "@components/carousel";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "@/modules/home/components/testimonial-card";
import { Components } from "@/modules/common/types/components";

export type TestimonialsProps = Components.Testimonials;

const Testimonials: React.FC<TestimonialsProps> = ({
  with_container,
  title,
  testimonials,
}) => {
  return (
    <section className="my-10 md:my-14 lg:my-16">
      <Container enabled={with_container}>
        <Layout className="lg:grid-cols-1">
          <Heading
            size="md"
            variant="primary"
            className="md:text-[48px] md:leading-[48px]"
            alignment="middle"
          >
            <h2>{title}</h2>
          </Heading>
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.data?.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="w-full basis-1/1 lg:basis-1/2"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Layout>
      </Container>
    </section>
  );
};

export default Testimonials;
