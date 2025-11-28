// Payload
import config from '@payload-config';
import { getPayload } from 'payload';

// Next Intl
import { getLocale } from 'next-intl/server';

// Utils
import { formatDateOnly } from '@/lib/format-date';

// Types
import type { Experience, Post, Project } from '@/payload-types';

export interface PayloadContextData {
  projects: Partial<Project>[];
  posts: Partial<Post>[];
  experience: Partial<Experience>[];
}

export async function getPayloadContext(): Promise<PayloadContextData> {
  const payload = await getPayload({ config });
  const locale = await getLocale();

  const [projects, posts, experience] = await Promise.all([
    payload
      .find({
        collection: 'projects',
        limit: 5,
        where: {
          locale: { equals: locale },
          _status: { equals: 'published' },
        },
        sort: '-featured,-order',
      })
      .catch(() => ({ docs: [] })),
    payload
      .find({
        collection: 'posts',
        limit: 5,
        where: {
          locale: { equals: locale },
          _status: { equals: 'published' },
        },
        sort: '-createdAt',
      })
      .catch(() => ({ docs: [] })),
    payload
      .find({
        collection: 'experience',
        limit: 5,
        where: {
          locale: { equals: locale },
          _status: { equals: 'published' },
        },
        sort: '-isCurrent,-startDate',
      })
      .catch(() => ({ docs: [] })),
  ]);

  return {
    projects: projects.docs.map((p) => ({
      title: p.title,
      subtitle: p.subtitle,
      description: truncateText(p.description, 120),
      body: p.body,
      technologies:
        p.technologies
          ?.slice(0, 5)
          .map((t) => ({ name: t?.name }))
          .filter((t) => t.name) || [],
      demo: p.demo ?? undefined,
      repository: p.repository ?? undefined,
    })),
    posts: posts.docs.map((p) => ({
      title: p.title,
      description: truncateText(p.description, 100),
      slug: p.slug,
    })),
    experience: experience.docs.map((e) => ({
      title: e.title,
      company: e.company,
      location: e.location ?? undefined,
      tasks: e.tasks?.slice(0, 5) || [],
      startDate: formatDateOnly(e.startDate, locale),
      endDate: e.endDate ? formatDateOnly(e.endDate, locale) : undefined,
      isCurrent: e.isCurrent ?? false,
      technologies:
        e.technologies
          ?.slice(0, 5)
          .map((t) => ({ name: t?.name }))
          .filter((t) => t.name) || [],
    })),
  };
}

function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}
