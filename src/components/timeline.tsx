import clsx from "clsx"
import * as React from "react"

type TimelineProps = React.PropsWithChildren<{
  className?: string
  as?: "ol" | "ul" | "div"
  "aria-label"?: string
}>

export function Timeline({
  children,
  className,
  as = "ol",
  ...props
}: TimelineProps) {
  const Comp = as as any
  return (
    <Comp
      className={clsx("relative space-y-8", className)}
      role={as === "div" ? "list" : undefined}
      {...props}
    >
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

/**
 * TimelineItem encapsula:
 * - Dot (punto) primario
 * - Línea conectora (opcional si no es el último)
 * - Padding izquierdo para el contenido
 */
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
      {/* Dot */}
      <span
        className={clsx(
          "absolute left-0 top-1 size-4 rounded-full bg-primary z-10",
          dotClassName
        )}
        aria-hidden="true"
      />
      {/* Connector line */}
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
