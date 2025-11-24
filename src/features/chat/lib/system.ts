import type { Message } from '../types';
import { detectLanguage } from './language-detector';
import { getPayloadContext, type PayloadContextData } from './payload-context';
import { SYSTEM_PROMPTS } from './prompts';

type Language = 'en' | 'es';

const LABELS = {
  en: {
    projects: 'FEATURED PROJECTS',
    posts: 'LATEST POSTS',
    experience: 'WORK EXPERIENCE',
    current: 'Current',
    tech: 'Tech',
    demo: 'Demo',
    repo: 'Repo',
  },
  es: {
    projects: 'PROYECTOS DESTACADOS',
    posts: 'ÚLTIMOS POSTS',
    experience: 'EXPERIENCIA LABORAL',
    current: 'Actual',
    tech: 'Tech',
    demo: 'Demo',
    repo: 'Repo',
  },
} as const;

function formatProjects(projects: PayloadContextData['projects'], lang: Language): string {
  if (projects.length === 0) return '';

  const { projects: title, tech, demo, repo } = LABELS[lang];

  const items = projects.map((p) => {
    const lines = [
      `• ${p.title} - ${p.subtitle}`,
      `  ${p.description}`,
      `  ${tech}: ${(p.technologies ?? []).join(', ')}`,
    ];

    if (p.demo) lines.push(`  ${demo}: ${p.demo}`);
    if (p.repository) lines.push(`  ${repo}: ${p.repository}`);

    return lines.join('\n');
  });

  return `--- ${title} ---\n${items.join('\n\n')}`;
}

function formatPosts(posts: PayloadContextData['posts'], lang: Language): string {
  if (posts.length === 0) return '';

  const { posts: title } = LABELS[lang];

  const items = posts.map((p) => `• ${p.title}\n  ${p.description}`);

  return `--- ${title} ---\n${items.join('\n\n')}`;
}

function formatExperience(experience: PayloadContextData['experience'], lang: Language): string {
  if (experience.length === 0) return '';

  const { experience: title, current, tech } = LABELS[lang];

  const items = experience.map((e) => {
    const location = e.location ? ` (${e.location})` : '';
    const endDate = e.isCurrent ? current : e.endDate || '';

    return [
      `• ${e.title} @ ${e.company}${location}`,
      `  ${e.startDate} - ${endDate}`,
      `  ${e.description}`,
      `  ${tech}: ${(e.technologies ?? []).join(', ')}`,
    ].join('\n');
  });

  return `--- ${title} ---\n${items.join('\n\n')}`;
}

export async function getSystemPrompt(messages: Message[]): Promise<string> {
  let lang: Language = 'en';

  try {
    lang = detectLanguage(messages) as Language;
    const context = await getPayloadContext();

    return [
      SYSTEM_PROMPTS[lang],
      formatProjects(context.projects, lang),
      formatPosts(context.posts, lang),
      formatExperience(context.experience, lang),
    ]
      .filter(Boolean)
      .join('\n\n');
  } catch (error) {
    console.warn('⚠️ Using base prompt (Payload unavailable):', error);

    return SYSTEM_PROMPTS[lang];
  }
}
