"use client";

import { AspectRatio } from "@/modules/common/components/aspect-ratio";
import { Layout } from "@/modules/common/components/layout";
import { Container } from "@/modules/common/components/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppConfig } from "@/config/app.config";
import { Components } from "@/modules/common/types/components";

export type PictureByDeviceProps = Components.PicByDevice;

const PictureByDevice: React.FC<PictureByDeviceProps> = ({ mobile, tablet, desktop }) => {
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

    const baseURL = AppConfig.strapi.url;

    return (
        <Container enabled={true}>
            <Layout
                className="grid-cols-6 gap-0 grid-rows-[90px_1fr_auto] lg:grid-cols-8 lg:grid-rows-[290px_1fr_auto] lg:gap-4 mt-4 mb-12 min-[450px]:mb-24 min-[560px]:mb-32 min-[650px]:mb-44 md:mb-64 lg:mt-8 lg:mb-32"
            >
                {desktop && (
                    <motion.div
                        className="col-start-1 col-end-6 row-start-1 lg:col-start-3 lg:col-end-9"
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={`${baseURL}${desktop.data.attributes.url}`}
                                alt={desktop.data.attributes.alternativeText || "Desktop"}
                                width={desktop.data.attributes.width}
                                height={desktop.data.attributes.height}
                                className="object-contain h-full w-full"
                            />
                        </AspectRatio>
                    </motion.div>
                )}
                {tablet && (
                    <motion.div
                        className="col-start-4 col-end-7 lg:col-start-1 lg:col-end-4 row-start-1"
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <AspectRatio ratio={3 / 4}>
                            <Image
                                src={`${baseURL}${tablet.data.attributes.url}`}
                                alt={tablet.data.attributes.alternativeText || "Tablet"}
                                width={tablet.data.attributes.width}
                                height={tablet.data.attributes.height}
                                className="object-contain h-full w-full"
                            />
                        </AspectRatio>
                    </motion.div>
                )}
                {mobile && (
                    <motion.div
                        className="col-start-1 lg:col-start-8 row-start-2"
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <AspectRatio ratio={9 / 16}>
                            <Image
                                src={`${baseURL}${mobile.data.attributes.url}`}
                                alt={mobile.data.attributes.alternativeText || "Mobile"}
                                width={mobile.data.attributes.width}
                                height={mobile.data.attributes.height}
                                className="object-contain h-full w-full"
                            />
                        </AspectRatio>
                    </motion.div>
                )}
            </Layout>
        </Container>
    );
};

export default PictureByDevice;