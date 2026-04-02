import type { Testimonial } from '@/payload-types';
import { getLocale, getTranslations } from 'next-intl/server';
import { getTestimonials } from '../api/testimonials';
import { TestimonialsList } from './testimonials-list';

export async function Testimonials() {
  const t = await getTranslations('sections.testimonials');
  const locale = await getLocale();
  const testimonials: Testimonial[] = await getTestimonials(locale);

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-medium">{t('title')}</h2>
      <TestimonialsList
        testimonials={testimonials.map((t) => ({
          id: t.id,
          testimonial: t.testimonial,
          name: t.name,
          role: t.role,
        }))}
      />
    </section>
  );
}
