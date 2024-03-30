import { Layout } from "@/modules/common/components/layout";
import { Components } from "@/modules/common/types/components";
import { Heading } from "@components/heading";
import { Container } from "@components/container";
import { AspectRatio } from "@components/aspect-ratio";
import { Badge } from "@components/badge";
import Image from "next/image";
import { AppConfig } from "@/config/app.config";

export type ImageWithTextProps = Components.ImageWithText;

const classes = {
  h1: "lg:text-[68px] lg:leading-[68px] xl:text-[80px] xl:leading-[80px]",
  h2: "lg:text-[24px] lg:leading-[28px] xl:text-[32px] xl:leading-[36px]",
  h3: "lg:text-[24px] lg:leading-[28px] xl:text-[32px] xl:leading-[36px]",
  h4: "lg:text-[24px] lg:leading-[28px] xl:text-[32px] xl:leading-[36px]",
  h5: "lg:text-[24px] lg:leading-[28px] xl:text-[32px] xl:leading-[36px]",
  h6: "lg:text-[24px] lg:leading-[28px] xl:text-[32px] xl:leading-[36px]",
};

const ImageWithText: React.FC<ImageWithTextProps> = ({
  heading,
  description,
  image,
  image_alignment,
  overview = [],
  badges = [],
}) => {
  const HeadingTag = heading?.hierarchy || "h2";

  const ImageMarkup = () => {
    if (image) {
      const width = image.image.data.attributes.width;
      const height = image.image.data.attributes.height;

      return (
        <div className="w-full">
          <AspectRatio ratio={width / height}>
            <Image
              src={`${AppConfig.strapi.url}${image.image.data.attributes.url}`}
              alt={
                image.image.data.attributes.alternativeText || "Project Image"
              }
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
  };

  return (
    <Container enabled={true}>
      <Layout className="lg:gap-10 lg:gap-y-4 pt-4">
        {image_alignment === "left" ? <ImageMarkup /> : null}

        {heading || description ? (
          <div className="w-full">
            {badges.length > 0 ? (
              <div className="flex items-center gap-2 mb-4">
                {badges.map((badge, index) => (
                  <Badge variant="default" size="base" key={index}>
                    {badge.title}
                  </Badge>
                ))}
              </div>
            ) : null}

            {heading ? (
              <Heading
                variant="primary"
                subHeading={heading.sub_title || ""}
                size="md"
                alignment="start"
                textTransform="uppercase"
                className={classes[heading.hierarchy]}
              >
                <HeadingTag>{heading.title}</HeadingTag>
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
                    <th className="text-left pr-4 lg:pr-8">{item.title}</th>
                    <td className="text-left">{item.description}</td>
                  </tr>
                ))}
              </table>
            ) : null}
          </div>
        ) : null}
        {image_alignment === "right" ? <ImageMarkup /> : null}
      </Layout>
    </Container>
  );
};

export default ImageWithText;
