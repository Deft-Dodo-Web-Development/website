"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/modules/common/components/button";
import useAppData from "@/modules/common/hooks/useAppData";
import { Projects } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";

export type ProjectCard = Projects;

export type ProjectScrollCarouselProps = {
  title?: string;
  cards: Projects[];
};

const ProjectScrollCarousel: React.FC<ProjectScrollCarouselProps> = ({
  title,
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
        {!!title && (
          <div className="absolute top-24 left-0 right-0 mx-auto w-full flex justify-center">
            <motion.h2
              className="text-[16px] uppercase text-center text-primary mb-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ease: "backInOut" }}
            >
              {title}
            </motion.h2>
          </div>
        )}
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
                  src={`${AppConfig.strapi.url}${card.attributes.image.data.attributes.formats.large.url}`}
                  alt={
                    card.attributes.image.data.attributes.alternativeText ||
                    card.attributes.title
                  }
                  width={
                    card.attributes.image.data.attributes.formats.large.width
                  }
                  height={
                    card.attributes.image.data.attributes.formats.large.height
                  }
                  className="rounded-xl w-[750px] h-[440px] object-cover"
                />
                <div className="flex flex-col mt-6">
                  <h3 className="text-2xl">{card.attributes.title}</h3>
                  <p className="text-[16px] text-white-56">
                    {card.attributes.summary}
                  </p>
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
