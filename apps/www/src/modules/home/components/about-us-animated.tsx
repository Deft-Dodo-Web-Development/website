"use client";

import { Heading } from "@/modules/common/components/heading";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export interface AboutUsProps {
  id: number;
  __component: "home.about-us";
  with_container: boolean;
  content: string;
  heading: {
    id: number;
    title: string;
    sub_title: string;
  };
}

const AboutUsAnimated = (props: AboutUsProps) => {
  const { heading, content } = props;

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
        <Heading
          subHeading={heading.sub_title}
          size="md"
          variant="primary"
          className="md:text-[48px] md:leading-[48px]"
        >
          {heading.title}
        </Heading>
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
        <p className="text-lg md:text-xl text-balance">{content}</p>
      </motion.div>
    </>
  );
};

export default AboutUsAnimated;
