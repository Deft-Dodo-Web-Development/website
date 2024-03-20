import { Container } from "@components/container";
import Image from "next/image";
import { MediaResponse } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";
import { Components } from "@/modules/common/types/components";

export type ImageType = {
  width: number;
  height: number;
  image: MediaResponse;
};

export type BrandsProps = Components.BrandsMarquee;

const BrandsMarquee: React.FC<BrandsProps> = (props) => {
  const { with_container, list } = props;
  const velocity = props.speed || 40;

  const images = list;
  const imagesLength = images?.data?.length || 0;
  const duplicate = imagesLength < 20 ? Math.ceil(20 / imagesLength) : 1;

  if (imagesLength === 0) return null;
  return (
    <Container enabled={with_container} asChild>
      <div className={`overflow-hidden`}>
        <div className="mt-20 2xl:mt-36 flex flex-nowrap min-w-[100vw] whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between flex-shrink-0 animate-[slide-left_20s_linear_infinite]"
              style={{ animationDuration: `${velocity}s` }}
            >
              {Array.from({ length: duplicate }).map(() => (
                <>
                  {images.data.map(
                    (item, index) =>
                      item?.attributes && (
                        <Image
                          key={index}
                          src={`${AppConfig.strapi.url}${item.attributes.url}`}
                          width={item.attributes.width}
                          height={item.attributes.height}
                          alt={item.attributes.alternativeText || "Client Logo"}
                          className="object-contain max-w-[215px] max-h-[48px] w-full h-7 xl:h-11 mx-6"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                        />
                      )
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-nowrap min-w-[100vw] whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between flex-shrink-0 animate-[slide-right_20s_linear_infinite]"
              style={{ animationDuration: `${velocity}s` }}
            >
              {Array.from({ length: duplicate }).map(() =>
                images.data.map(
                  (item, index) =>
                    item?.attributes && (
                      <Image
                        key={index}
                        src={`${AppConfig.strapi.url}${item.attributes.url}`}
                        width={item.attributes.width}
                        height={item.attributes.height}
                        alt={item.attributes.alternativeText || "Client Logo"}
                        className="object-contain max-w-[215px] max-h-[48px] w-full h-7 xl:h-11 mx-6"
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    )
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrandsMarquee;
