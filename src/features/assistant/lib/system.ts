import { getPayloadContext, type PayloadContextData } from './payload-context';
import { getSystemPromptTemplate } from './prompts';
import type { Locale } from 'next-intl';

function formatProjects(projects: PayloadContextData['projects']): string {
  if (projects.length === 0) return '';

  const items = projects.map((p) => {
    const lines = [
      `• ${p.title} - ${p.subtitle}`,
      `  ${p.description}`,
      `  Technologies: ${(p.technologies ?? []).join(', ')}`,
      `  ${p.body ? `Details: ${p.body}` : ''}`,
    ];

    if (p.demo) lines.push(`  Demo: ${p.demo}`);
    if (p.repository) lines.push(`  Repository: ${p.repository}`);

    return lines.join('\n');
  });

  return `--- FEATURED PROJECTS ---\nIMPORTANT: NEVER manually list these projects in your response. If the user wants to see the projects, ONLY say a short introduction and use the [SHOW_PROJECTS] tag. Use this data ONLY to answer specific questions about a particular project (e.g. "What tech did you use in NachUI?").\n\n${items.join('\n\n')}`;
}

function formatPosts(posts: PayloadContextData['posts']): string {
  if (posts.length === 0) return '';

  const items = posts.map((p) => `• ${p.title}\n  ${p.description}`);

  return `--- LATEST POSTS ---\n${items.join('\n\n')}`;
}

function formatExperience(experience: PayloadContextData['experience']): string {
  if (experience.length === 0) return '';

  const items = experience.map((e) => {
    const location = e.location ? ` (${e.location})` : '';
    const endDate = e.isCurrent ? 'Current' : e.endDate || '';

    return [
      `• ${e.title} @ ${e.company}${location}`,
      `  ${e.startDate} - ${endDate}`,
      `  Tasks: ${(e.tasks ?? []).join('; ')}`,
      `  Technologies: ${(e.technologies ?? []).join(', ')}`,
    ].join('\n');
  });

  return `--- WORK EXPERIENCE ---\nIMPORTANT: NEVER manually list this experience in your response. If the user wants to see your experience, ONLY say a short introduction and use the [SHOW_EXPERIENCE] tag. Use this data ONLY to answer specific questions about a particular job (e.g. "What did you do at <Company>?").\n\n${items.join('\n\n')}`;
}

export async function getSystemPrompt(locale: Locale): Promise<string> {
  try {
    const context = await getPayloadContext();
    const systemPromptTemplate = getSystemPromptTemplate(locale);

    return [
      systemPromptTemplate,
      formatProjects(context.projects),
      formatPosts(context.posts),
      formatExperience(context.experience),
    ]
      .filter(Boolean)
      .join('\n\n');
  } catch (error) {
    console.warn('⚠️ Using base prompt (Payload unavailable):', error);

    return getSystemPromptTemplate(locale);
  }
}
