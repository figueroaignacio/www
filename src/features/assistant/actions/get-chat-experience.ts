'use server';

import { getExperiences } from '@/features/home/api/experience';
import type { Experience } from '@/payload-types';
import type { Locale } from 'next-intl';

export async function getChatExperience(locale: string): Promise<Experience[]> {
  const experiences = await getExperiences(locale as Locale);
  return experiences;
}
