import type { Testimonial } from '@/payload-types';
import { Quote } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { getTestimonials } from '../api/testimonials';

export async function Testimonials() {
  const t = await getTranslations('sections.testimonials');
  const locale = await getLocale();
  const testimonials: Testimonial[] = await getTestimonials(locale);

  return (
    <section className="space-y-6 ">
      <h2 className="text-lg font-medium">{t('title')}</h2>
      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
}

function Testimonial({
  testimonial,
  name,
  role,
}: {
  testimonial: string;
  name: string;
  role: string;
}) {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <Quote className="h-6 w-6 text-muted-foreground/50 mb-4" />
      <p className="text-foreground/90 leading-relaxed mb-6">{testimonial}</p>
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
