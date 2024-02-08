import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const headingVariants = cva(
  "font-normal text-primary uppercase text-left text-white text-[80px] leading-[80px]",
  {
    variants: {
      variant: {
        primary: "text-white",
        secondary: "text-primary",
      },
      size: {
        primary: "text-[80px] leading-[80px]",
        secondary: "text-[72px] leading-[72px]",
        subtitle: "text-[24px] leading-[24px]",
        small: "text-[16px] leading-6 font-medium",
      },
      alignment: {
        start: "text-left",
        middle: "text-center",
        end: "text-right",
      },
      textTrasform: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
    },
    defaultVariants: {
      alignment: "start",
      variant: "primary",
      textTrasform: "uppercase",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {
  subHeading?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant,
      children,
      alignment,
      textTrasform,
      size,
      subHeading,
      ...props
    },
    ref
  ) => {
    const Comp = typeof children === "object" ? Slot : "h2";

    return (
      <div>
        {subHeading && (
          <span
            className={cn(
              headingVariants({
                variant: variant === "primary" ? "secondary" : "primary",
                size: "small",
                alignment,
                textTrasform,
              }),
              "block"
            )}
          >
            {subHeading}
          </span>
        )}
        <Comp
          className={cn(
            headingVariants({
              variant,
              size,
              className,
              textTrasform,
              alignment,
            }),
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      </div>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };