import { Separator } from "@components/separator";
import { Avatar, AvatarImage } from "@components/avatar";
import { AspectRatio } from "@components/aspect-ratio";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Testimonials } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";
import Stars from "./stars";

export type TestimonialCardProps = Testimonials;

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  attributes: { identity, message, title, stars },
}) => {
  return (
    <article className="relative pt-12 h-full">
      <Quote className="absolute w-24 h-24 top-0 right-0 fill-secondary stroke-primary pr-6" />
      <div className="flex flex-col flex-wrap justify-between h-full py-12 px-6 md:px-8 bg-white-8">
        {title || message ? (
          <p className="font-medium text-sm md:text-base">
            {title ? (
              <q className="text-3xl font-bold mb-4 block">{title}</q>
            ) : null}

            {message}
          </p>
        ) : null}
        <Separator className="my-8" />
        {!!identity && (
          <div className="flex flex-wrap items-center content-center justify-between w-full">
            <div className="flex items-center justify-center gap-4">
              {identity.picture?.data?.attributes ? (
                <Avatar className="w-14 h-14">
                  <AvatarImage
                    src={`${AppConfig.strapi.url}${identity.picture.data?.attributes?.url}`}
                    alt={
                      identity.picture.data.attributes.alternativeText ||
                      identity.name
                    }
                  />
                </Avatar>
              ) : null}

              {identity.name || identity.occupation ? (
                <div className="space-y-2">
                  <div>
                    <span className="text-slate-200 text-md font-medium">
                      {identity.name}
                    </span>
                    <span className="text-slate-200 block text-xs">
                      {identity.occupation}
                    </span>
                  </div>
                  <Stars stars={stars} />
                </div>
              ) : null}
            </div>
            {identity.company_logo?.data?.attributes ? (
              <div className="flex items-center justify-center w-36 mt-6 md:mt-0">
                <AspectRatio ratio={35 / 8}>
                  <Image
                    width={350}
                    height={45}
                    src={`${AppConfig.strapi.url}${identity.company_logo.data?.attributes?.url}`}
                    alt={
                      identity.company_logo.data.attributes.alternativeText ||
                      identity.name
                    }
                    className="object-contain w-[350px] h-auto"
                  />
                </AspectRatio>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
};

export default TestimonialCard;
