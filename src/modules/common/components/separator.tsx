"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

export type SeparatorProps = {
  container?: boolean;
} & React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      container,
      ...props
    },
    ref
  ) => {
    const Container = container ? "div" : React.Fragment;
    const containerProps = container ? { className: "container" } : {};

    return (
      <Container {...containerProps}>
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "shrink-0 bg-white-16",
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
            className
          )}
          {...props}
        />
      </Container>
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
