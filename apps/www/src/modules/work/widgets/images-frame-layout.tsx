"use client";

import { AspectRatio } from "@/modules/common/components/aspect-ratio";
import { Layout } from "@/modules/common/components/layout";
import { Container } from "@/modules/common/components/container";
import Image from "next/image";
import MobileImage from "@/modules/common/assets/mobile.png";
import MacbookImage from "@/modules/common/assets/laptop.png";
import TableImage from "@/modules/common/assets/tablet.png";
import { motion } from "framer-motion";

const ImagesFrameLayout = () => {
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

    return (
        <Container enabled={true}>
            <Layout
                className="grid-cols-6 gap-0 grid-rows-[90px_1fr] lg:grid-cols-8 lg:grid-rows-[290px_1fr] lg:gap-4"
            >
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
                            src={MacbookImage}
                            alt="macbook"
                            className="object-contain h-full w-full"
                        />
                    </AspectRatio>
                </motion.div>
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
                            src={TableImage}
                            alt="tablet"
                            className="object-contain h-full w-full"
                        />
                    </AspectRatio>
                </motion.div>
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
                            src={MobileImage}
                            alt="Mobile"
                            className="object-contain h-full w-full"
                        />
                    </AspectRatio>
                </motion.div>
            </Layout>
        </Container>
    );
};

export default ImagesFrameLayout;