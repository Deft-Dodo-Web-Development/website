"use client";

import { Icon, IconName } from "@/modules/common/components/icon";
import { Button } from "@components/button";
import useAppData from "@hooks/useAppData";

export type ServiceCardProps = {
  title: string;
  description: string;
  slug: string;
  icon: IconName;
  variant?: "default" | "primary";
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  slug,
  variant = "default",
}) => {
  const { locale } = useAppData();
  const settings = {
    default: {
      background: "bg-white-8",
      text: "text-primary",
      buttonVariant: "outline",
    },
    primary: {
      background: "bg-primary",
      text: "text-white",
      buttonVariant: "default",
    },
  }

  return (
    <section className={settings[variant].background + " p-8 rounded-lg space-y-8 h-full"}>
      <Icon name={icon} className={settings[variant].text + " size-16"} />
      <div className="space-y-3">
        <h3 className="font-bold text-xl xl:text-2xl text-white sm:min-h-14 lg:min-h-16">
          {title}
        </h3>
        <p className="sm:min-h-44 md:min-h-48 xl:min-h-36">{description}</p>
      </div>
      <Button
        icon="ArrowUpRight"
        variant={settings[variant].buttonVariant}
        className="text-sm"
        href={`/${locale}/services/${slug}`}
      >
        Learn More
      </Button>
    </section>
  );
};

export default ServiceCard;
