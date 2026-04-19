'use server';

import { getProjects } from '@/features/projects/api/projects';
import type { Project } from '@/payload-types';
import type { Locale } from 'next-intl';

export async function getChatProjects(locale: string): Promise<Project[]> {
  const projects = await getProjects(locale as Locale);
  return projects.slice(0, 4);
}
