"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AppConfig } from "@/config/app.config";
import { Badge } from "@components/badge";
import { formatDate } from "../utilities";
import { Blogs } from "@/modules/common/types/common";

export type ArticleCardProps = Blogs;

const ArticleCard: React.FC<ArticleCardProps> = ({
    attributes: { slug, image, categories, title, summary, createdAt }
}) => {
    const link = slug ? `/blog/${slug}` : "#";

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
                    src={`${AppConfig.strapi.url}${image.data?.attributes?.url || ''}`}
                    alt={image.data?.attributes?.alternativeText || title}
                    width={750}
                    height={440}
                    className="rounded-xl"
                />
                <div className="flex flex-col mt-6">
                    <span className="block text-primary">
                        {formatDate(createdAt)}
                    </span>
                    <h3 className="text-2xl">{title}</h3>
                    <p className="text-[16px] text-white-56">{summary}</p>
                </div>
            </Link>
            {categories.data.length > 0 ? (
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    {categories.data.map((category, index) => (
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
