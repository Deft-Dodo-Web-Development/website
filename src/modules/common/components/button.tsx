import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icon, IconName } from "./icon";

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
        default: "h-10 px-6 py-3",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: IconName;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, icon, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    if (icon) {
      return (
        <button
          className={cn("gap-2", buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
          <Icon name={icon} className="size-5" />
        </button>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
