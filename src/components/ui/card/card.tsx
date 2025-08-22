import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import styles from './card.module.css';

const cardVariants = cva(styles.card, {
  variants: {
    variant: {
      default: styles.cardDefault,
      outlined: styles.cardOutlined,
      ghost: styles.cardGhost,
      filled: styles.cardFilled,
      destructive: styles.cardDestructive,
      success: styles.cardSuccess,
      warning: styles.cardWarning,
    },
    size: {
      sm: styles.cardSm,
      md: styles.cardMd,
      lg: styles.cardLg,
      xl: styles.cardXl,
      full: styles.cardFull,
    },
    shadow: {
      none: styles.shadowNone,
      sm: styles.shadowSm,
      md: styles.shadowMd,
      lg: styles.shadowLg,
      xl: styles.shadowXl,
    },
    rounded: {
      none: styles.roundedNone,
      sm: styles.roundedSm,
      md: styles.roundedMd,
      lg: styles.roundedLg,
      full: styles.roundedFull,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'full',
    shadow: 'md',
    rounded: 'md',
  },
});

const cardHeaderVariants = cva(styles.cardHeader, {
  variants: {
    spacing: {
      none: styles.headerSpacingNone,
      sm: styles.headerSpacingSm,
      md: styles.headerSpacingMd,
      lg: styles.headerSpacingLg,
    },
  },
  defaultVariants: {
    spacing: 'md',
  },
});

const cardTitleVariants = cva(styles.cardTitle, {
  variants: {
    size: {
      sm: styles.titleSm,
      md: styles.titleMd,
      lg: styles.titleLg,
      xl: styles.titleXl,
    },
    weight: {
      normal: styles.titleNormal,
      medium: styles.titleMedium,
      semibold: styles.titleSemibold,
      bold: styles.titleBold,
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'semibold',
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps extends VariantProps<typeof cardHeaderVariants> {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps extends VariantProps<typeof cardTitleVariants> {
  children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

interface CardContentProps {
  children?: React.ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  justify?: 'start' | 'center' | 'end' | 'between';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

// Componentes
export function Card({ children, className, variant, size, shadow, rounded, ...props }: CardProps) {
  return (
    <div className={clsx(cardVariants({ variant, size, shadow, rounded }), className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className, spacing, ...props }: CardHeaderProps) {
  return (
    <div className={clsx(cardHeaderVariants({ spacing }), className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, size, weight, ...props }: CardTitleProps) {
  return (
    <h3 className={clsx(cardTitleVariants({ size, weight }), className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
  muted = true,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={clsx(styles.cardDescription, muted && styles.cardDescriptionMuted, className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className, spacing = 'md', ...props }: CardContentProps) {
  return (
    <div
      className={clsx(
        styles.cardContent,
        styles[`contentSpacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  justify = 'start',
  spacing = 'md',
  ...props
}: CardFooterProps) {
  return (
    <div
      className={clsx(
        styles.cardFooter,
        styles[`footerJustify${justify.charAt(0).toUpperCase() + justify.slice(1)}`],
        styles[`footerSpacing${spacing.charAt(0).toUpperCase() + spacing.slice(1)}`],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
