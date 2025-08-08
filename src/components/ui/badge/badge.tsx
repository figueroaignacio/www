import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import styles from "./badge.module.css"

const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      default: styles.default,
      secondary: styles.secondary,
      destructive: styles.destructive,
      outline: styles.outline,
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof badgeVariants> { }

export default function Badge({
  variant,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      data-variant={variant}
      className={clsx(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
