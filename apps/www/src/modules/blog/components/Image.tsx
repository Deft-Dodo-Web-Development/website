"use client";

import Image from "next/image";
import { AspectRatio } from "@components/aspect-ratio";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { StrapiResponse, Media } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";

export type ImageProps = {
    image: StrapiResponse<Media>;
    aspectRatio?: {
        sm?: number;
        md?: number;
        lg?: number;
    }
};

const ImageComponent: React.FC<ImageProps> = ({ image, aspectRatio }) => {
    const isMedium = useMediaQuery({ minWidth: 768 });
    const isLarge = useMediaQuery({ minWidth: 1024 });
    const [ratio, setRatio] = useState(16 / 9);

    useEffect(() => {
        if (isLarge) {
            setRatio(aspectRatio?.lg || 16 / 9);
        } else if (isMedium) {
            setRatio(aspectRatio?.md || 1 / 1);
        } else {
            setRatio(aspectRatio?.sm || 100 / 150);
        }
    }, [isMedium, isLarge]);

    return (
        <AspectRatio ratio={ratio}>
            <Image
                src={`${AppConfig.strapi.url}${image.data.attributes.url}`}
                alt={image.data.attributes.alternativeText || "Image"}
                width={image.data.attributes.width}
                height={image.data.attributes.height}
                loading="eager"
                className="rounded-xl h-full w-full object-cover"
            />
        </AspectRatio>
    );
}

export { ImageComponent as Image };