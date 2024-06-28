import clsx from "clsx";
import styles from "./Button.module.css";
import { ComponentProps, ReactNode, forwardRef } from "react";

type ButtonVariant = "contained";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <button
        className={clsx(styles.button, styles[variant], className)}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
