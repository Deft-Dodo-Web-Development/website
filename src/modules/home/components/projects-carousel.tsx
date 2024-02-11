"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/modules/common/components/button";
import useAppData from "@/modules/common/hooks/useAppData";

export type ProjectCard = {
  url: StaticImageData | string;
  title: string;
  subtitle: string;
  id: number;
};

export type ProjectScrollCarouselProps = {
  cards: ProjectCard[];
};

const ProjectScrollCarousel: React.FC<ProjectScrollCarouselProps> = ({
  cards,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const locale = useAppData((state) => state.locale);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] container">
      <div className="sticky top-0 flex h-[95vh] items-start pt-28 overflow-hidden">
        <div className="absolute top-24 left-0 right-0 mx-auto w-full flex justify-center">
          <motion.h2
            className="text-[16px] uppercase text-center text-primary mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: "backInOut" }}
          >
            Featured Works
          </motion.h2>
        </div>
        <motion.div style={{ x }} className="flex gap-4 pt-10">
          {cards.map((card, i) => {
            return (
              <motion.div
                key={card.id}
                className="h-[750px] w-[80vw] max-w-[750px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{ ease: "backInOut", delay: i < 1 ? i * 1.2 : 0 }}
              >
                <Image
                  src={card.url}
                  alt={card.title}
                  width={750}
                  height={440}
                  className="rounded-xl"
                />
                <div className="flex flex-col mt-6">
                  <h3 className="text-2xl">{card.title}</h3>
                  <p className="text-[16px] text-white-56">{card.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 mx-auto mt-8 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ease: "backInOut" }}
        >
          <Button
            className="px-14 py-8"
            icon="ArrowUpRight"
            href={`${locale}/work`}
          >
            View All
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export { ProjectScrollCarousel };
