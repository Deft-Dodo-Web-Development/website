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
        md: "text-[32px] leading-[32px]",
        lg: "text-[48px] leading-[48px]",
        sm: "text-[16px] leading-6 font-medium",
      },
      alignment: {
        start: "text-left",
        middle: "text-center",
        end: "text-right",
      },
      textTransform: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
    },
    defaultVariants: {
      alignment: "start",
      variant: "primary",
      textTransform: "uppercase",
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
      textTransform: textTrasform,
      size,
      subHeading,
      ...props
    },
    ref
  ) => {
    const Comp = typeof children === "object" ? Slot : "h2";

    const subHeadingComp = (
      <span
        className={cn(
          headingVariants({
            variant: variant === "primary" ? "secondary" : "primary",
            size: "sm",
            alignment,
            textTransform: textTrasform,
          }),
          "block"
        )}
      >
        {subHeading}
      </span>
    );

    const headingComp = (
      <Comp
        className={cn(
          headingVariants({
            variant,
            size,
            className,
            textTransform: textTrasform,
            alignment,
          }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );

    if (subHeading) {
      return (
        <div>
          {subHeadingComp}
          {headingComp}
        </div>
      );
    }

    return (
      <Comp
        className={cn(
          headingVariants({
            variant,
            size,
            className,
            textTransform: textTrasform,
            alignment,
          }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
