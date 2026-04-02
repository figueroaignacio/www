'use client';

import { cn } from '@/lib/cn';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface TestimonialData {
  id: number;
  testimonial: string;
  name: string;
  role: string;
}

const INITIAL_COUNT = 2;

export function TestimonialsList({ testimonials }: { testimonials: TestimonialData[] }) {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations('sections.testimonials');

  const hasMore = testimonials.length > INITIAL_COUNT;
  const visible = expanded ? testimonials : testimonials.slice(0, INITIAL_COUNT);

  return (
    <div className="relative">
      <div className="grid gap-4">
        {visible.map((testimonial) => (
          <div key={testimonial.id} className="p-6 bg-card rounded-lg border border-border">
            <Quote className="h-6 w-6 text-muted-foreground/50 mb-4" />
            <p className="text-foreground/90 leading-relaxed mb-6">{testimonial.testimonial}</p>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !expanded && (
        <div className="relative mt-0">
          {/* Fade overlay */}
          <div className="absolute -top-24 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setExpanded(true)}
              className="btn btn-outline"
            >
              {t('showMore')}
            </button>
          </div>
        </div>
      )}

      {hasMore && expanded && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExpanded(false)}
            className={cn('btn btn-outline')}
          >
            {t('showLess')}
          </button>
        </div>
      )}
    </div>
  );
}
