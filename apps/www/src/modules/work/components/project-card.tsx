"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StrapiResponse, Media } from "@/modules/common/types/common";
import Link from "next/link";
import { AppConfig } from "@/config/app.config";
import { PlaceholderIcon } from "@/modules/common/components/placeholder-icon";

export type ProjectCardProps = {
  image: StrapiResponse<Media>;
  title: string;
  summary: string;
  slug: string;
};

const ProjectCard: React.FC<ProjectCardProps> = (card) => {
  const link = card.slug ? `/work/${card.slug}` : "#";

  return (
    <motion.div
      className="w-full max-w-[750px]"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30%" }}
      transition={{ ease: "backInOut" }}
    >
      <Link href={link}>
        {card.image.data ? (
          <Image
            src={`${AppConfig.strapi.url}${card.image.data?.attributes?.url}`}
            alt={card.image.data.attributes.alternativeText || card.title}
            width={750}
            height={440}
            className="rounded-xl"
          />
        ) : (<PlaceholderIcon className="size-full rounded-xl" />)
        }

        {card.title || card.summary ? (
          <div className="flex flex-col mt-6">
            {card.title ? (<h3 className="text-2xl">{card.title}</h3>) : null}
            {card.summary ? (<p className="text-[16px] text-white">{card.summary}</p>) : null}
          </div>
        ) : null}
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
