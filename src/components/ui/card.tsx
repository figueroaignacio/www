import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const cardVariants = cva('relative flex flex-col text-card-foreground', {
  variants: {
    variant: {
      default: 'bg-card border border-border',
      outlined: 'bg-transparent border-2 border-border',
      ghost: 'bg-transparent border border-transparent hover:bg-accent hover:border-border',
      filled: 'bg-primary text-primary-foreground border border-primary',
      destructive: 'bg-destructive text-destructive-foreground border border-destructive',
      success: 'bg-success text-success-foreground border border-success',
      warning: 'bg-warning text-warning-foreground border border-warning',
    },
    size: {
      sm: 'max-w-80',
      md: 'max-w-96',
      lg: 'max-w-112',
      xl: 'max-w-128',
      full: 'w-full',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'full',
    shadow: 'md',
    rounded: 'md',
  },
})

const cardHeaderVariants = cva('flex flex-col', {
  variants: {
    spacing: {
      none: 'p-0 gap-0',
      sm: 'p-4 pb-0 gap-1',
      md: 'p-6 pb-0 gap-1.5',
      lg: 'p-8 pb-0 gap-2',
    },
  },
  defaultVariants: {
    spacing: 'md',
  },
})

const cardTitleVariants = cva('m-0 leading-tight tracking-tight', {
  variants: {
    size: {
      sm: 'text-base',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'semibold',
  },
})

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode
  className?: string
}

interface CardHeaderProps extends VariantProps<typeof cardHeaderVariants> {
  children: React.ReactNode
  className?: string
}

interface CardTitleProps extends VariantProps<typeof cardTitleVariants> {
  children: React.ReactNode
  className?: string
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
  muted?: boolean
}

interface CardContentProps {
  children?: React.ReactNode
  className?: string
  spacing?: 'none' | 'sm' | 'md' | 'lg'
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
  justify?: 'start' | 'center' | 'end' | 'between'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({ children, className, variant, size, shadow, rounded, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, size, shadow, rounded }), className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className, spacing, ...props }: CardHeaderProps) {
  return (
    <div className={cn(cardHeaderVariants({ spacing }), className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, size, weight, ...props }: CardTitleProps) {
  return (
    <h3 className={cn(cardTitleVariants({ size, weight }), className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className,
  muted = true,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn('text-sm leading-relaxed m-0', muted && 'text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardContent({ children, className, spacing = 'md', ...props }: CardContentProps) {
  const spacingMap = {
    none: 'p-0',
    sm: 'p-4 pt-0',
    md: 'p-6 pt-0',
    lg: 'p-8 pt-0',
  }
  return (
    <div className={cn('flex-1', spacingMap[spacing], className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  children,
  className,
  justify = 'start',
  spacing = 'md',
  ...props
}: CardFooterProps) {
  const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  }
  const spacingMap = {
    none: 'p-0',
    sm: 'p-4 pt-0',
    md: 'p-6 pt-0',
    lg: 'p-8 pt-0',
  }
  return (
    <div
      className={cn('flex items-center gap-2', justifyMap[justify], spacingMap[spacing], className)}
      {...props}
    >
      {children}
    </div>
  )
}
