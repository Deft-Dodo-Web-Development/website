import { Separator } from "@components/separator";
import { Avatar, AvatarImage } from "@components/avatar";
import { AspectRatio } from "@components/aspect-ratio";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Testimonials } from "@/modules/common/types/common";
import { AppConfig } from "@/config/app.config";

export type TestimonialCardProps = Testimonials;

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  attributes: { identity, message, title },
}) => {
  return (
    <div className="relative pt-12">
      <Quote className="absolute w-24 h-24 top-0 right-0 fill-primary stroke-white pr-6" />
      <div className="flex flex-col flex-wrap items-center py-12 px-6 md:px-8 bg-white-8">
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
                    src={`${AppConfig.strapi.url}${identity.picture.data.attributes.url}`}
                    alt={
                      identity.picture.data.attributes.alternativeText ||
                      identity.name
                    }
                  />
                </Avatar>
              ) : null}

              {identity.name || identity.occupation ? (
                <div>
                  <span className="text-slate-200 text-sm font-medium">
                    {identity.name}
                  </span>
                  <span className="text-slate-200 block text-xs">
                    {identity.occupation}
                  </span>
                </div>
              ) : null}
            </div>
            {identity.company_logo?.data?.attributes ? (
              <div className="flex items-center justify-center w-36 mt-6 md:mt-0">
                <AspectRatio ratio={35 / 8}>
                  <Image
                    width={140}
                    height={32}
                    src={`${AppConfig.strapi.url}${identity.company_logo.data.attributes.url}`}
                    alt={
                      identity.company_logo.data.attributes.alternativeText ||
                      identity.name
                    }
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
