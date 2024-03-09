"use client";

import { Components } from "@/modules/common/types/components";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export type AboutUsAnimatedProps = Components.AboutUs;

const AboutUsAnimated: React.FC<AboutUsAnimatedProps> = ({
  heading,
  content,
}) => {
  const isLarge = useMediaQuery({ minWidth: 1024 });
  const variants = {
    base: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    left: {
      opacity: 0,
      x: isLarge ? -40 : 0,
      y: isLarge ? 0 : -40,
    },
    right: {
      opacity: 0,
      x: isLarge ? 40 : 0,
      y: isLarge ? 0 : 40,
    },
  };

  return (
    <>
      <motion.section
        className="w-full lg:max-w-[530px]"
        variants={variants}
        initial="left"
        whileInView="base"
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <h2 className="text-[16px] uppercase text-primary mb-3">
          {heading.title}
        </h2>
        <p className="text-lg text-white-56">{heading.sub_title}</p>
      </motion.section>
      <motion.div
        className="relative"
        initial="right"
        variants={variants}
        whileInView="base"
        viewport={{ once: true, margin: isLarge ? "-90px" : "-50px" }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-balance">
          {content}
        </p>
      </motion.div>
    </>
  );
};

export default AboutUsAnimated;
