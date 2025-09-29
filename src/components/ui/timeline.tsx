import { cn } from '@/lib/utils';
import * as React from 'react';

type TimelineProps = {
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
};

export function Timeline({ children, className, ...props }: TimelineProps) {
  return (
    <ol className={cn('relative space-y-8', className)} {...props}>
      {children}
    </ol>
  );
}

export function TimelineDiv({ children, className, ...props }: TimelineProps) {
  return (
    <div className={cn('relative space-y-8', className)} role="list" {...props}>
      {children}
    </div>
  );
}

type TimelineItemProps = React.PropsWithChildren<{
  isLast?: boolean;
  className?: string;
  dotClassName?: string;
  lineClassName?: string;
  contentClassName?: string;
  'aria-label'?: string;
}>;

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
    <li className={cn('relative pl-8', className)} {...props}>
      <span
        className={cn('absolute left-0 top-1 size-4 rounded-full bg-primary z-10', dotClassName)}
        aria-hidden="true"
      />
      {!isLast && (
        <span
          className={cn('absolute left-2 top-6 bottom-0 w-px bg-border', lineClassName)}
          aria-hidden="true"
        />
      )}
      <div className={cn('space-y-3', contentClassName)}>{children}</div>
    </li>
  );
}
