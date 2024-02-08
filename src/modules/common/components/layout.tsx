import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

export type LayoutProps = {
  children: React.ReactNode;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component
        className={cn("grid grid-cols-1 lg:grid-cols-2 gap-5", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Layout.displayName = "Layout";

export { Layout };
