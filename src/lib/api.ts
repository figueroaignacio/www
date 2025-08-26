// Definitions
import {
  Education,
  EducationApiResponse,
  Experience,
  ExperienceApiResponse,
  Post,
  PostApiResponse,
} from '@/lib/definitions';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function getEducation(): Promise<Education[]> {
  const res = await fetch(`${BASE_URL}/education`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: EducationApiResponse = await res.json();
  return data.docs;
}

export async function getExperience(): Promise<Experience[]> {
  const res = await fetch(`${BASE_URL}/experience`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: ExperienceApiResponse = await res.json();
  return data.docs;
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch experiences:', res.statusText);
    return [];
  }

  const data: PostApiResponse = await res.json();
  return data.docs;
}
