import type { Project } from '@/payload-types';
import { Locale } from 'next-intl';
import { findCollection, findOneBySlug } from '@/lib/collection-query';

export async function getProjects(locale: Locale): Promise<Project[]> {
  return findCollection<Project>('projects', locale);
}

export async function getCommercialProjects(locale: Locale): Promise<Project[]> {
  return findCollection<Project>('projects', locale, {
    where: { featured: { equals: false } },
  });
}

export async function getPersonalProjects(locale: Locale): Promise<Project[]> {
  return findCollection<Project>('projects', locale, {
    where: { featured: { equals: true } },
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return findOneBySlug<Project>('projects', slug);
}
