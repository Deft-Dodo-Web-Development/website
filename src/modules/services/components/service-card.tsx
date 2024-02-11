import { Icon, IconName } from "@/modules/common/components/icon";
import { Button } from "@components/button";
import React from "react";

export type ServiceCardProps = {
  title: string;
  description: string;
  slug: string;
  icon: IconName;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  slug,
}) => {
  return (
    <section className="p-12 bg-white-8 rounded-lg space-y-8">
      <Icon name={icon} className="size-16 text-primary" />
      <div className="space-y-3">
        <h3 className="font-bold text-xl xl:text-2xl text-white sm:min-h-14 lg:min-h-16">
          {title}
        </h3>
        <p className="sm:min-h-44 md:min-h-48 xl:min-h-36">{description}</p>
      </div>
      <Button
        icon="ArrowUpRight"
        variant="outline"
        className="text-sm"
        href={`/services/${slug}`}
      >
        Learn More
      </Button>
    </section>
  );
};

export default ServiceCard;
