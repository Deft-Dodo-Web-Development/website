"use client";

import { Container } from "@components/container";
import { AspectRatio } from "@components/aspect-ratio";
import { Button } from "@components/button";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { bisonFont } from "@/modules/common/assets/fonts";

export type HeroBannerProps = {
  with_container?: boolean;
  heading_bold?: string;
  heading_thing?: string;
  description?: string;
  cta?: string;
  href?: string;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  with_container: container,
  heading_bold: headingBold,
  heading_thing: headingThin,
  description,
  cta,
  href,
}: HeroBannerProps) => {
  const isMedium = useMediaQuery({ minWidth: 768 });
  const isLarge = useMediaQuery({ minWidth: 1024 });
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  useEffect(() => {
    if (isLarge) {
      setAspectRatio(16 / 9);
    } else if (isMedium) {
      setAspectRatio(1 / 1);
    } else {
      setAspectRatio(100 / 150);
    }
  }, [isMedium, isLarge]);

  return (
    <Container enabled={container}>
      <AspectRatio ratio={aspectRatio}>
        <div className="absolute inset-0 py-24 md:py-48 bg-gradient-radial">
          <div className="text-white-56">
            <div className="w-full text-center text-white">
              {(headingBold || headingThin) && (
                <h1 className={`uppercase ${bisonFont.className}`}>
                  {headingBold && (
                    <span className="block text-4xl md:text-8xl font-bold">
                      {headingBold}
                    </span>
                  )}
                  {headingThin && (
                    <span className="block text-4xl md:text-8xl font-extralight">
                      {headingThin}
                    </span>
                  )}
                </h1>
              )}

              {description && (
                <p className="mt-12 text-1xl font-sans max-w-3xl mx-auto">{description}</p>
              )}

              {cta && (
                <div className="mt-8">
                  <Button variant="default" href={href} icon="ArrowUpRight">
                    {cta}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </AspectRatio>
    </Container>
  );
};

export default HeroBanner;
