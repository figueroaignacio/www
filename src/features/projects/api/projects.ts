import { API_URL } from '@/lib/constants';
import { Locale } from 'next-intl';

export async function getProjects(locale: Locale) {
  const res = await fetch(`${API_URL}/api/projects?where[locale][equals]=${locale}`, {
    next: { revalidate: 3600, tags: ['projects'] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }

  const data = await res.json();
  return data.docs;
}

export async function getCommercialProjects(locale: Locale) {
  const res = await fetch(
    `${API_URL}/api/projects?where[featured][equals]=false&where[locale][equals]=${locale}`,
    {
      next: { revalidate: 3600, tags: ['projects', 'commercial'] },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await res.json();
  return data.docs;
}

export async function getPersonalProjects(locale: Locale) {
  const res = await fetch(
    `${API_URL}/api/projects?where[featured][equals]=true&where[locale][equals]=${locale}`,
    {
      next: { revalidate: 3600, tags: ['projects', 'personal'] },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch featured projects');
  }

  const data = await res.json();
  return data.docs ?? [];
}

export async function getProjectBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/projects/?where[slug][equals]=${slug}`, {
    next: { revalidate: 3600, tags: [`project-${slug}`] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch project by slug');
  }

  const data = await res.json();
  return data.docs?.[0] ?? null;
}
