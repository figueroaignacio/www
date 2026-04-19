'use server';

import { getProjects } from '@/features/projects/api/projects';
import type { Project } from '@/payload-types';
import { getLocale } from 'next-intl/server';

export async function getChatProjects(): Promise<Project[]> {
  const locale = (await getLocale()) as string;
  const projects = await getProjects(locale);
  return projects.slice(0, 4);
}
