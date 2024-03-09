"use client";

import { Heading } from "@/modules/common/components/heading";
import { Components } from "@/modules/common/types/components";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export type KeyFactsProps = Components.KeyFacts;

const KeyFactsAnimated: React.FC<KeyFactsProps> = ({ featured, title }) => {
  const isLarge = useMediaQuery({ minWidth: 1024 });

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
    left: {
      opacity: 0,
      x: isLarge ? -40 : 0,
      y: isLarge ? 0 : -40,
    },
  };

  return (
    <>
      {!!title && (
        <motion.section
          className="w-full lg:max-w-[530px]"
          variants={variants}
          initial="left"
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
            className="md:text-[48px] md:leading-[48px]"
          >
            {title}
          </Heading>
        </motion.section>
      )}
      <div>
        <motion.ul
          className="flex items-center text-left flex-col md:items-start md:flex-row md:justify-evenly relative gap-8 md:gap-5 flex-wrap"
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true, margin: "0px" }}
        >
          {featured.map((_item, index) => (
            <motion.li className="text-center" variants={variants} key={index}>
              <h3 className="font-semibold text-5xl leading-[48px] mb-2">
                {_item.text}
                <span className="text-primary">{_item.featured}</span>
              </h3>
              <p className="text-base leading-6 text-white-56">{_item.muted}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default KeyFactsAnimated;
