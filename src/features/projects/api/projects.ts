import type { Project } from '@/payload-types';
import config from '@payload-config';
import { Locale } from 'next-intl';
import { getPayload } from 'payload';

export async function getProjects(locale: Locale): Promise<Project[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'projects',
    where: {
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
  });

  return result.docs;
}

export async function getCommercialProjects(locale: Locale): Promise<Project[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'projects',
    where: {
      featured: { equals: false },
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
  });

  return result.docs;
}

export async function getPersonalProjects(locale: Locale): Promise<Project[]> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'projects',
    where: {
      featured: { equals: true },
      locale: { equals: locale },
      _status: { equals: 'published' },
    },
  });

  return result.docs ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'projects',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });

  return result.docs?.[0] ?? null;
}
