"use client";

import { Button } from "@/modules/common/components/button";
import { Heading } from "@/modules/common/components/heading";
import { motion } from "framer-motion";
import { Container } from "./container";

const variants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export type ExperienceProps = {
  with_container?: boolean;
  title: string;
  description: string;
  button: {
    text: string;
    url: string;
    variant: string;
  };
};

const Experience: React.FC<ExperienceProps> = ({
  button,
  description,
  title,
}) => {
  return (
    <Container enabled={true}>
      <div className="bg-primary py-14 mt-20 rounded-3xl">
        <section className="text-center mx-auto px-4 md:px-8">
          <motion.div
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Heading
              variant="primary"
              size="md"
              alignment="middle"
              textTransform="uppercase"
              className="md:text-[48px] md:leading-[48px] font-bold text-dark mb-8 uppercase text-balance"
            >
              {title}
            </Heading>
          </motion.div>
          <motion.p
            className="text-base leading-7 mb-14 text-dark mx-auto max-w-[860px]"
            initial="offscreen"
            variants={variants}
            whileInView="onscreen"
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {description}
          </motion.p>
          <motion.div
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "20%" }}
            transition={{ delay: 0.5, ease: "backInOut" }}
          >
            <Button
              href={button.url}
              variant={(button.variant as any) || "default"}
              icon="ArrowUpRight"
              className="px-14 py-7 text-xl leading-6 hover:bg-white-8 hover:text-white"
            >
              {button.text}
            </Button>
          </motion.div>
        </section>
      </div>
    </Container>
  );
};

export default Experience;
