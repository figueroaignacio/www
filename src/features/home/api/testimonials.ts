import config from '@payload-config';
import { Locale } from 'next-intl';
import { getPayload } from 'payload';

import type { Testimonial } from '@/payload-types';

export async function getTestimonials(locale: Locale): Promise<Testimonial[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'testimonials',
    where: {
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
  });

  return result.docs;
}
