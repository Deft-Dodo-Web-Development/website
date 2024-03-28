"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Media } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";
import { Heading } from "@/modules/common/components/heading";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  products,
  heading,
}: {
  heading?: {
    title: string;
    sub_title?: string;
  };
  products: {
    title: string;
    link: string;
    thumbnail: Media;
    summary?: string;
  }[];
}) => {
  const productLength = products.length;
  const partSize = Math.ceil(productLength / 3);

  const firstRow = products.slice(0, partSize);
  const secondRow = products.slice(partSize, partSize * 2);
  const thirdRow = products.slice(partSize * 2, partSize * 3);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 80, bounce: 100 };
  const space = 50 * productLength;

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, space]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -space]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 700]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[220vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {!!heading && (
        <div className="container">
          <Heading
            variant="primary"
            subHeading={heading.sub_title || ""}
            size="lg"
            alignment="start"
            textTransform="uppercase"
          >
            <h2>{heading.title}</h2>
          </Heading>
        </div>
      )}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={{
                ...product,
                align:
                  partSize > 3 && index === firstRow.length - 1
                    ? "right"
                    : "left",
              }}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-16 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={{
                ...product,
                align: index === 0 ? "right" : "left",
              }}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    summary?: string;
    link: string;
    thumbnail: Media;
    align?: "left" | "right";
  };
  translate: MotionValue<number>;
}) => {
  if (!product.thumbnail?.attributes) return null;
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={`${AppConfig.strapi.url}${product.thumbnail.attributes.url}`}
          alt={product.thumbnail.attributes.alternativeText || product.title}
          width={750}
          height={300}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
      <div
        className={cn(
          "absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 w-[90%]",
          {
            "text-left": product.align === "left",
            "text-right": product.align === "right",
          }
        )}
      >
        <h2 className="text-secondary text-xl">{product.title}</h2>
        <p className="left-4 text-white">{product.summary}</p>
      </div>
    </motion.div>
  );
};
