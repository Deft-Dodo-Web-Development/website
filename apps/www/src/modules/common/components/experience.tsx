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

const Experience = () => {
  return (
    <Container enabled={true}>
      <div className="bg-primary py-14 mt-20 rounded-3xl">
        <section className="text-center mx-auto px-8">
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
              Ready to elevate your e-commerce experience?
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
            Our team of expert Shopify developers is here to turn your online
            store dreams into reality. Whether you're starting from scratch,
            looking to revamp your existing store, or seeking custom e-commerce
            solutions, we've got you covered. Let's collaborate and create
            something extraordinary together.
          </motion.p>
          <motion.div
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "20%" }}
            transition={{ delay: 0.5, ease: "backInOut" }}
          >
            <Button
              href="#"
              variant="default"
              icon="ArrowUpRight"
              className="px-14 py-7 text-xl leading-6"
            >
              Get Started
            </Button>
          </motion.div>
        </section>
      </div>
    </Container>
  );
};

export default Experience;
