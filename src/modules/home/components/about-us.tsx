"use client";

import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { motion } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";

type AboutUsProps = {
  container?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const AboutUs: React.FC<AboutUsProps> = ({ container }) => {
  const isLarge = useMediaQuery("only screen and (min-width: 1024px)");

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
    <Container enabled={container}>
      <Layout>
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
          <h2 className="text-[16px] uppercase text-primary mb-3">About Us</h2>
          <p className="text-lg text-white-56">
            A dynamic and innovative Shopify developer agency dedicated to
            reshaping the way brands engage, sell, and succeed in the digital
            landscape.
          </p>
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
            We craft immersive online shopping experiences that leave lasting
            impressions. With a team of passionate developers, creative
            designers, and strategic thinkers, we are committed to pushing the
            boundaries of e-commerce excellence.
          </p>
        </motion.div>
      </Layout>
    </Container>
  );
};

export default AboutUs;
