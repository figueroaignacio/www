import config from '@payload-config';
import { getPayload } from 'payload';

interface CompactProject {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  demo?: string;
  repository?: string;
}

interface CompactPost {
  title: string;
  description: string;
  slug: string;
}

interface CompactExperience {
  title: string;
  company: string;
  location?: string;
  description: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  technologies: string[];
}

export interface PayloadContextData {
  projects: CompactProject[];
  posts: CompactPost[];
  experience: CompactExperience[];
}

export async function getPayloadContext(locale: 'en' | 'es'): Promise<PayloadContextData> {
  const payload = await getPayload({ config });

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
      technologies:
        p.technologies
          ?.slice(0, 5)
          .map((t: any) => t.name)
          .filter(Boolean) || [],
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
      description: truncateText(e.description, 100),
      startDate: formatDate(e.startDate),
      endDate: e.endDate ? formatDate(e.endDate) : undefined,
      isCurrent: e.isCurrent ?? false,
      technologies:
        e.technologies
          ?.slice(0, 5)
          .map((t: any) => t.name)
          .filter(Boolean) || [],
    })),
  };
}

function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
