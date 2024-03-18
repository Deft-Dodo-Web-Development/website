import Image from "next/image";
import { AspectRatio } from "@components/aspect-ratio";
import { AppConfig } from "@/config/app.config";
import { Components } from "@/modules/common/types/components";

export type ImageProps = Components.Image;

const ImageComponent: React.FC<ImageProps> = ({ image, width, height }) => {
    const localWidth = width || image.data.attributes.width;
    const localHeight = height || image.data.attributes.height;

    return (
        <AspectRatio ratio={localWidth / localHeight}>
            <Image
                src={`${AppConfig.strapi.url}${image.data.attributes.url}`}
                alt={image.data.attributes.alternativeText || "Image"}
                width={localWidth}
                height={localHeight}
                className="h-full w-full object-cover"
            />
        </AspectRatio>
    );
}

export { ImageComponent as Image };