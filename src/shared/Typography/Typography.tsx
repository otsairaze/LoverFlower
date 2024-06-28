import clsx from "clsx";
import styles from "./Typography.module.css";
import { ComponentProps, ReactNode } from "react";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";

type TypographyVariant =
  | "light20"
  | "light200"
  | "regular14"
  | "regular16"
  | "regular20"
  | "regular100"
  | "bold30"
  | "bold200";

type TransformType = "uppercase" | "lowercase";

type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> & {
  children: ReactNode;
  variant: TypographyVariant;
  tag?: TypographyTag;
  transform?: TransformType;
};

export const Typography = <Tag extends TypographyTag = "div">({
  children,
  className,
  variant,
  tag = "div",
  transform = "uppercase",
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component
      className={clsx(styles.text, styles[variant], className)}
      data-transform={transform}
      {...props}
    >
      {children}
    </Component>
  );
};
