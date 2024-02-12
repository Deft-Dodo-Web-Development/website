import React from "react";
import * as IconsList from "lucide-react";

export type IconName = keyof typeof IconsList;
export type IconProps = {
  name: IconName;
} & React.SVGAttributes<HTMLOrSVGElement>;

const Icon = React.forwardRef<HTMLOrSVGElement, IconProps>(
  ({ name, ...props }, ref) => {
    const IconComponent = IconsList[name] as React.ForwardRefExoticComponent<
      React.RefAttributes<HTMLOrSVGElement>
    >;

    return <IconComponent ref={ref} {...props} />;
  }
);
Icon.displayName = "Icon";

export { Icon };
