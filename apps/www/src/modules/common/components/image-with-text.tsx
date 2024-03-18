import { Layout } from "@/modules/common/components/layout";
import { Components } from "@/modules/common/types/components";
import { Heading } from "@components/heading";
import { Container } from "@components/container";
import { AspectRatio } from "@components/aspect-ratio";
import { Badge } from "@components/badge";
import Image from "next/image";

export type ImageWithTextProps = Components.ImageWithText;

const classes =
    "lg:text-[68px] lg:leading-[68px] xl:text-[80px] xl:leading-[80px]";

const ImageWithText: React.FC<ImageWithTextProps> = ({
    heading,
    description,
    image,
    image_alignment,
    overview = [],
    badges = [],
}) => {

    const ImageMarkup = () => {
        if (image) {
            return (
                <div className="w-full">
                    <AspectRatio ratio={4 / 3}>
                        <Image
                            src={image.image.data.attributes.url}
                            alt={image.image.data.attributes.alternativeText || "Project Image"}
                            width={image.width || image.image.data.attributes.width}
                            height={image.height || image.image.data.attributes.height}
                            loading="eager"
                            className="rounded-xl h-full object-cover"
                        />
                    </AspectRatio>
                </div>
            );
        }

        return null;
    }

    return (
        <Container enabled={true}>
            <Layout className="lg:gap-10 lg:gap-y-4 pt-4">
                {badges.length > 0 ? (
                    <div className="flex items-center gap-2 col-start-2">
                        {badges.map((badge, index) => (
                            <Badge variant="default" size="base" key={index}>{badge.title}</Badge>
                        ))}
                    </div>
                ) : null}

                {image_alignment === "left" ? (<ImageMarkup />) : null}

                {heading || description ? (
                    <div className="w-full">
                        {heading ? (
                            <Heading
                                variant="primary"
                                subHeading={heading.sub_title || ""}
                                size="lg"
                                alignment="start"
                                textTransform="uppercase"
                                className={classes}
                            >
                                <h2>{heading.title}</h2>
                            </Heading>
                        ) : null}

                        {description ? (
                            <p className="text-lg text-white mt-3">{description}</p>
                        ) : null}

                        {overview.length > 0 ? (
                            <table className="mt-4 lg:mt-6 table-auto">
                                <caption className="caption-top text-left uppercase pb-2 font-bold">
                                    Project Overview
                                </caption>
                                {overview.map((item, index) => (
                                    <tr key={`tr-${index}`}>
                                        <th className="text-left pr-4 lg:pr-8">
                                            {item.title}
                                        </th>
                                        <td className="text-left">
                                            {item.description}
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        ) : null}
                    </div>
                ) : null}
                {image_alignment === "right" ? (<ImageMarkup />) : null}
            </Layout>
        </Container>
    );
}

export default ImageWithText;