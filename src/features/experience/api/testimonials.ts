import { API_URL } from '@/lib/constants';
import { Locale } from 'next-intl';

export async function getTestimonials(locale: Locale) {
  const res = await fetch(`${API_URL}/api/testimonials?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }

  const data = await res.json();
  return data.docs;
}
