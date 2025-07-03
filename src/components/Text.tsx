import React from "react";

export const textVariants = {
  default: "text-xl",
  muted: "text-xl text-(--text-secondary)",
  heading: "text-2xl",
  blast: "text-3xl",
};

type TextVariant = keyof typeof textVariants;

export function Text({
  as = "span",
  variant = "default",
  className,
  children,
  ...props
}: {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: TextVariant;
  className?: string;
  children?: React.ReactNode;
}) {
  return React.createElement(
    as,
    { className: `${textVariants[variant!]} ${className ?? ""}`, ...props },
    children
  );
}
