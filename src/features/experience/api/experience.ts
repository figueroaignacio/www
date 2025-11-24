import { API_URL } from '@/lib/constants';
import { Locale } from 'next-intl';

export async function getExperience(locale: Locale) {
  const res = await fetch(`${API_URL}/api/experience?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }

  const data = await res.json();
  return data.docs;
}
