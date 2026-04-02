import { API_URL } from '@/lib/constants';
import { Locale } from 'next-intl';

export async function getExperiences(locale: Locale) {
  const res = await fetch(
    `${API_URL}/api/experience?where[locale][equals]=${locale}&sort=order&where[_status][equals]=published`,
    {
      next: { revalidate: 3600, tags: ['experience'] },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }

  const data = await res.json();
  return data.docs;
}
