import { Container } from "@components/container";
import Image from "next/image";
import { MediaResponse } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";

export type ImageType = {
  width: number;
  height: number;
  image: MediaResponse;
};

export type BrandsProps = {
  className?: string;
  with_container?: boolean;
  velocity: number;
  list: ImageType[];
};

const BrandsMarquee: React.FC<BrandsProps> = (props) => {
  const { with_container, list, className } = props;
  const velocity = props.velocity || 40;

  const images = list;
  const imagesLegth = images.length;
  const duplicate = imagesLegth < 20 ? Math.ceil(20 / imagesLegth) : 1;

  return (
    <Container enabled={with_container} asChild>
      <div className={`overflow-hidden ${className}`}>
        <div className="mt-20 2xl:mt-36 flex flex-nowrap min-w-[100vw] whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between flex-shrink-0 animate-[slide-left_20s_linear_infinite]"
              style={{ animationDuration: `${velocity}s` }}
            >
              {Array.from({ length: duplicate }).map(() => (
                <>
                  {images.map((item, index) => (
                    <>
                      {item.image.data && (
                        <Image
                          key={index}
                          src={`${AppConfig.strapi.url}${item.image.data.attributes.url}`}
                          width={item.width}
                          height={item.height}
                          alt={
                            item.image.data.attributes.alternativeText ||
                            "Client Logo"
                          }
                          className="object-contain max-w-[215px] max-h-[48px] w-full h-7 xl:h-11 mx-6"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                        />
                      )}
                    </>
                  ))}
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
              {Array.from({ length: duplicate }).map(() => (
                <>
                  {images.map((item, index) => (
                    <>
                      {item.image.data && (
                        <Image
                          key={index}
                          src={`${AppConfig.strapi.url}${item.image.data.attributes.url}`}
                          width={item.width}
                          height={item.height}
                          alt={
                            item.image.data.attributes.alternativeText ||
                            "Client Logo"
                          }
                          className="a object-contain max-w-[215px] max-h-[48px] w-full h-7 xl:h-11 mx-6"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                        />
                      )}
                    </>
                  ))}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrandsMarquee;
