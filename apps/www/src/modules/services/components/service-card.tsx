"use client";

import { Icon } from "@/modules/common/components/icon";
import { Services } from "@/modules/common/types/common";
import { iconify } from "@/modules/common/utilities/icon.utility";
import { Button } from "@components/button";
import useAppData from "@hooks/useAppData";

export type ServiceCardProps = Services & {
  variant?: "default" | "primary";
};

type ButtonVariant = "default" | "outline";

const ServiceCard: React.FC<ServiceCardProps> = ({
  attributes: { title, cta, icon, description, slug },
  variant = "default",
}) => {
  const { locale } = useAppData();
  const settings = {
    default: {
      background: "bg-white-8",
      text: "text-primary",
      buttonVariant: "outline" as ButtonVariant,
    },
    primary: {
      background: "bg-primary",
      text: "text-white",
      buttonVariant: "default" as ButtonVariant,
    },
  };

  return (
    <section
      className={
        settings[variant].background + " p-8 rounded-lg space-y-8 h-full"
      }
    >
      {icon && (
        <Icon
          name={iconify(icon)}
          className={settings[variant].text + " size-16"}
        />
      )}
      {(title || description) && (
        <div className="space-y-3">
          {title && (
            <h3 className="font-bold text-xl xl:text-2xl text-white sm:min-h-14 lg:min-h-16">
              {title}
            </h3>
          )}
          {description && (
            <p className="sm:min-h-44 md:min-h-48 xl:min-h-36">{description}</p>
          )}
        </div>
      )}
      {cta && (
        <Button
          icon="ArrowUpRight"
          variant={settings[variant].buttonVariant}
          className="text-sm"
          href={`/${locale}/services/${slug}`}
        >
          {cta}
        </Button>
      )}
    </section>
  );
};

export default ServiceCard;
