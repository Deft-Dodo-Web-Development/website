import { Slot } from "@radix-ui/react-slot";
import React from "react";

export type ContainerProps = {
  children: React.ReactNode;
  enabled?: boolean;
  asChild?: boolean;
};

/**
 * A flexible container component that can act as a regular `div`, a `Slot` for direct child insertion, or a simple
 * React Fragment based on the provided props. This component is designed to offer a flexible way to wrap content
 * without unnecessary DOM nesting.
 */
const Container: React.FC<ContainerProps> = ({
  enabled,
  children,
  asChild,
  ...props
}) => {
  const Container = ConditionalContainer({ asChild, container: enabled });
  const containerProps = enabled ? { className: "container", ...props } : {};

  return <Container {...containerProps}>{children}</Container>;
};

const ConditionalContainer = ({
  container,
  asChild,
}: {
  container?: boolean;
  asChild?: boolean;
}) => {
  if (asChild) return Slot;
  if (container) return "div";
  return React.Fragment;
};

export { Container };
