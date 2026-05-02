import { Locale } from 'next-intl';

import type { Testimonial } from '@/payload-types';
import { findCollection } from '@/lib/collection-query';

export async function getTestimonials(locale: Locale): Promise<Testimonial[]> {
  return findCollection<Testimonial>('testimonials', locale);
}
