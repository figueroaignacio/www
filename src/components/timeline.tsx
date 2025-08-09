import clsx from "clsx"
import * as React from "react"

type AllowedTags = "ol" | "ul" | "div"

type TimelineProps<T extends AllowedTags = "ol"> = {
  className?: string
  as?: T
  "aria-label"?: string
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">

export function Timeline<T extends AllowedTags = "ol">({
  children,
  className,
  as,
  ...props
}: TimelineProps<T>) {
  const Comp = as || "ol"

  return (
    <Comp
      className={clsx("relative space-y-8", className)}
      role={Comp === "div" ? "list" : undefined}
      {...(props as any)}
    >
      {children}
    </Comp>
  )
}

export function TimelineAlternative<T extends AllowedTags = "ol">({
  children,
  className,
  as,
  ...props
}: TimelineProps<T>) {
  const Comp = as || "ol"

  const {
    id,
    style,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    ...restProps
  } = props as any

  const commonProps = {
    id,
    style,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    className: clsx("relative space-y-8", className),
    role: Comp === "div" ? "list" as const : undefined,
  }

  return (
    <Comp {...commonProps}>
      {children}
    </Comp>
  )
}

type TimelineItemProps = React.PropsWithChildren<{
  isLast?: boolean
  className?: string
  dotClassName?: string
  lineClassName?: string
  contentClassName?: string
  "aria-label"?: string
}>

export function TimelineItem({
  children,
  isLast = false,
  className,
  dotClassName,
  lineClassName,
  contentClassName,
  ...props
}: TimelineItemProps) {
  return (
    <li className={clsx("relative pl-8", className)} {...props}>
      <span
        className={clsx(
          "absolute left-0 top-1 size-4 rounded-full bg-primary z-10",
          dotClassName
        )}
        aria-hidden="true"
      />
      {!isLast && (
        <span
          className={clsx(
            "absolute left-2 top-6 bottom-0 w-px bg-border",
            lineClassName
          )}
          aria-hidden="true"
        />
      )}
      <div className={clsx("space-y-3", contentClassName)}>{children}</div>
    </li>
  )
}