"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export type ProjectCardProps = {
  url: StaticImageData | string;
  title: string;
  subtitle: string;
  id: number;
};

const ProjectCard: React.FC<ProjectCardProps> = (card) => {
  return (
    <motion.div
      className="w-full max-w-[750px]"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30%" }}
      transition={{ ease: "backInOut" }}
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
};

export default ProjectCard;
