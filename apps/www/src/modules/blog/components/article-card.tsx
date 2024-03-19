"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StrapiResponse, Media, CategoryAttributes } from "@/modules/common/types/common";
import Link from "next/link";
import { AppConfig } from "@/config/app.config";
import { Badge } from "@components/badge";
import { formatDate } from "../utilities";

export type ArticleCardProps = {
    image: StrapiResponse<Media>;
    categories: StrapiResponse<Array<CategoryAttributes>>;
    title: string;
    summary: string;
    slug: string;
    createdAt: string;
};

const ArticleCard: React.FC<ArticleCardProps> = (card) => {
    const link = card.slug ? `/blog/${card.slug}` : "#";

    return (
        <motion.div
            className="w-full max-w-[750px] relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ ease: "backInOut" }}
        >
            <Link href={link}>
                <Image
                    src={`${AppConfig.strapi.url}${card.image.data.attributes.url}`}
                    alt={card.image.data.attributes.alternativeText || card.title}
                    width={750}
                    height={440}
                    className="rounded-xl"
                />
                <div className="flex flex-col mt-6">
                    <span className="block mb-0 text-primary mb-2">
                        {formatDate(card.createdAt)}
                    </span>
                    <h3 className="text-2xl">{card.title}</h3>
                    <p className="text-[16px] text-white-56">{card.summary}</p>
                </div>
            </Link>
            {card.categories.data.length > 0 ? (
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    {card.categories.data.map((category, index) => (
                        <Badge
                            variant="default"
                            size="base"
                            key={index}
                            className="mr-2"
                        >
                            {category.attributes.name}
                        </Badge>
                    ))}
                </div>
            ) : null}
        </motion.div>
    )
}

export default ArticleCard;
