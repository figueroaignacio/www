// Hooks
import { useTranslations } from 'next-intl';

// Components
import { TestimonialCard } from './testimonial-card';

// Utils
import { getLocale } from 'next-intl/server';
import { getTestimonials } from '../api/testimonials';

// Types
import type { Testimonial } from '@/payload-types';

export async function AllTestimonials() {
  const t = useTranslations('sections.testimonials');
  const locale = await getLocale();
  const testimonials: Testimonial[] = await getTestimonials(locale);

  return (
    <>
      <h2>{t('title')}</h2>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
              name={testimonial.name}
              role={testimonial.role}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
