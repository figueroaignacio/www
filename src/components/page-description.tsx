'use client';

// Components
import { AnimateIn } from '@/components/animate-in';

interface SectionTitleProps {
  title: string;
  delay?: number;
}

export function PageDescription({ title, delay = 0.1 }: SectionTitleProps) {
  return (
    <AnimateIn variant="fadeUp" delay={delay}>
      <h2 className="text-muted-foreground text-sm">{title}</h2>
    </AnimateIn>
  );
}
