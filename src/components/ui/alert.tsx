import { cn } from '@/lib/utils';
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const alertVariants = cva('my-6 flex items-start rounded-lg p-4 gap-3', {
  variants: {
    variant: {
      default: 'border-border border bg-accent',
      info: 'border-blue-100 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-900/10',
      warning: 'border-amber-100 bg-amber-50/50 dark:border-amber-900/30 dark:bg-amber-900/10',
      danger: 'border-rose-100 bg-rose-50/50 dark:border-rose-900/30 dark:bg-rose-900/10',
      success:
        'border-emerald-100 bg-emerald-50/50 dark:border-emerald-900/30 dark:bg-emerald-900/10',
      tip: 'bg-secondary text-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const iconVariants = cva('flex-shrink-0 h-5 w-5', {
  variants: {
    variant: {
      default: 'text-slate-400 dark:text-slate-500',
      info: 'text-blue-400 dark:text-blue-300',
      warning: 'text-amber-400 dark:text-amber-300',
      danger: 'text-rose-400 dark:text-rose-300',
      success: 'text-emerald-400 dark:text-emerald-300',
      tip: 'text-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const AlertIcon = {
  default: QuestionMarkCircledIcon,
  info: InfoCircledIcon,
  warning: ExclamationTriangleIcon,
  danger: CrossCircledIcon,
  success: CheckCircledIcon,
  tip: InfoCircledIcon,
};

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  children?: React.ReactNode;
}

export const AlertTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5 className={cn('mb-1 leading-none font-medium tracking-tight', className)} {...props} />
);

export const AlertDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('text-sm text-slate-600 dark:text-slate-400 [&_p]:leading-relaxed', className)}
    {...props}
  />
);

export function Alert({ children, className, variant = 'default', ...props }: AlertProps) {
  const Icon = AlertIcon[variant || 'default'];

  return (
    <div className={cn(alertVariants({ variant }), className)} {...props}>
      {Icon && <Icon className={iconVariants({ variant })} />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
