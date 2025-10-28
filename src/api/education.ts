import { API_URL } from '@/lib/constants';
import { Locale } from 'next-intl';

export async function getEducation(locale: Locale) {
  const res = await fetch(`${API_URL}/api/education?where[locale][equals]=${locale}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch education');
  }

  const data = await res.json();
  return data.docs;
}
