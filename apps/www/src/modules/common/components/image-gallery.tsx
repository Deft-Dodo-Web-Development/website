"use client";

import { Components } from "@/modules/common/types/components";
import { Container } from "@components/container";
import { Layout } from "@components/layout";
import { Heading } from "@components/heading";
import Image from "next/image";
import { AppConfig } from "@/config/app.config";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@components/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
    CarouselNext,
    CarouselPrevious
} from "@components/carousel";

export type ImageGalleryProps = Components.ImageGallery;

const ImageGallery: React.FC<ImageGalleryProps> = ({ heading, images }) => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (api) {
            api?.scrollTo(current);
        }
    }, [current, api]);

    const handleOpen = (index: number) => {
        setCurrent(index);
        setOpen(true);
    }

    return (
        <Container enabled={true}>
            <Layout className="lg:grid-cols-1 my-8">
                {heading ? (
                    <Heading
                        size="md"
                        subHeading={heading.sub_title || ""}
                        variant="primary"
                        className="md:text-[48px] md:leading-[48px]"
                        alignment="middle"
                    >
                        <h2>{heading.title}</h2>
                    </Heading>
                ) : null}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.length > 0 && images.map((image, index) => (
                        <div key={index} className="bg-white-8 p-5 rounded-lg max-h-80 relative">
                            <Image
                                src={`${AppConfig.strapi.url}${image.image?.data?.attributes.url}`}
                                alt={image.image?.data?.attributes.alternativeText || "Image"}
                                width={image.image?.data?.attributes.width}
                                height={image.image?.data?.attributes.height}
                                className="w-full h-full object-contain rounded-lg"
                            />
                            <button onClick={() => handleOpen(index)} className="absolute top-2 right-2 p-2 bg-white-8 rounded-full transition-colors duration-300 hover:bg-primary/5 dark:hover:bg-primary/5">
                                <FiSearch className="w-6 h-6 stroke-primary" />
                            </button>
                        </div>
                    ))}
                </div>
                {open && (
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogContent className="p-1 bg-dark w-[85vw] max-w-[1200px]">
                            <Carousel
                                plugins={[]}
                                setApi={setApi}
                                opts={{
                                    align: "start",
                                }}
                            >
                                <CarouselContent>
                                    {images.length > 0 && images.map((image, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="w-full"
                                        >
                                            <Image
                                                src={`${AppConfig.strapi.url}${image.image?.data?.attributes.url}`}
                                                alt={image.image?.data?.attributes.alternativeText || "Image"}
                                                width={image.image?.data?.attributes.width}
                                                height={image.image?.data?.attributes.height}
                                                className="w-full h-[80vh] object-contain "
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="hidden md:block" />
                                <CarouselNext className="hidden md:block" />
                            </Carousel>
                        </DialogContent>
                    </Dialog>
                )}
            </Layout>
        </Container>
    );
};

export default ImageGallery;
