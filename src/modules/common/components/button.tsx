import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icon, IconName } from "./icon";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[100px] text-[16px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-dark hover:bg-white-56",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border bg-transparent hover:bg-accent hover:text-accent-foreground border-white-16",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-6 py-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      textTransform: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      textTransform: "uppercase",
    },
  }
);

type WithLink =
  | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>);

type ButtonProp =
  | { icon: IconName; asChild?: never }
  | { icon?: never; asChild?: boolean };

export type ButtonProps = WithLink &
  VariantProps<typeof buttonVariants> &
  ButtonProp;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    if (icon) {
      return (
        <ButtonOrLink
          className={cn("gap-2", buttonVariants({ variant, size, className }))}
          ref={ref as React.Ref<WithLink>}
          {...props}
        >
          {children}
          <Icon name={icon} className="size-5" />
        </ButtonOrLink>
      );
    }

    if (!props.asChild) {
      return (
        <ButtonOrLink
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as React.Ref<WithLink>}
          {...props}
        >
          {children}
        </ButtonOrLink>
      );
    }

    return (
      <Slot
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Slot>
    );
  }
);

const ButtonOrLink = React.forwardRef<WithLink, WithLink>((props, ref) => {
  if (props.href) {
    return <Link {...props} ref={ref as React.Ref<HTMLAnchorElement>} />;
  }

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      ref={ref as React.Ref<HTMLButtonElement>}
    />
  );
});

ButtonOrLink.displayName = "ButtonOrLink";
Button.displayName = "Button";

export { Button, buttonVariants };
