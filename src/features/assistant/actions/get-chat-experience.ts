'use server';

import { getExperiences } from '@/features/home/api/experience';
import type { Experience } from '@/payload-types';
import { getLocale } from 'next-intl/server';

export async function getChatExperience(): Promise<Experience[]> {
  const locale = (await getLocale()) as string;
  const experiences = await getExperiences(locale);
  return experiences;
}
