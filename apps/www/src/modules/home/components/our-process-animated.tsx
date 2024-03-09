"use client";

import { Heading } from "@/modules/common/components/heading";
import { motion } from "framer-motion";

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

export interface OurProcessProps {
  id: number;
  __component: "home.our-process";
  with_container: boolean;
  heading: {
    id: number;
    title: string;
  };
  items: ProcessItem[];
}

const OurProcessAnimated = (props: OurProcessProps) => {
  const { heading, items } = props;
  const variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="my-20">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <Heading
          size="md"
          variant="primary"
          className="md:text-[48px] md:leading-[48px] mb-16"
          alignment="middle"
        >
          {heading.title}
        </Heading>
      </motion.div>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8"
        initial="hidden"
        whileInView="show"
        variants={variants}
        viewport={{ once: true, margin: "0px" }}
      >
        {items.map((item) => (
          <motion.li
            className="bg-primary/5 p-8"
            variants={variants}
            key={item.number}
          >
            <span className="font-medium text-6xl leading-[60px] lg:text-[80px] lg:leading-[80px] block mb-5 text-primary">
              {item.number}
            </span>
            <h3 className="font-semibold text-3xl leading-8 md:text-4xl md:leading-[40px] mb-5 text-white">
              {item.title}
            </h3>
            <p className="font-normal text-base leading-6 text-white-56 text-pretty">
              {item.description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default OurProcessAnimated;
