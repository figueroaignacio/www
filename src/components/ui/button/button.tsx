import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export const button = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      outline: styles.outline,
      secondary: styles.secondary,
      destructive: styles.destructive,
      ghost: styles.ghost,
    },
    size: {
      default: styles.defaultSize,
      sm: styles.sm,
      lg: styles.lg,
      icon: styles.icon,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={clsx(button({ variant, size }), className)} {...props} />;
}
