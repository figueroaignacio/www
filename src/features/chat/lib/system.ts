import { getPayloadContext, type PayloadContextData } from './payload-context';
import { SYSTEM_PROMPT } from './prompts';

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

  return `--- FEATURED PROJECTS ---\n${items.join('\n\n')}`;
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

  return `--- WORK EXPERIENCE ---\n${items.join('\n\n')}`;
}

export async function getSystemPrompt(): Promise<string> {
  try {
    const context = await getPayloadContext();

    return [
      SYSTEM_PROMPT,
      formatProjects(context.projects),
      formatPosts(context.posts),
      formatExperience(context.experience),
    ]
      .filter(Boolean)
      .join('\n\n');
  } catch (error) {
    console.warn('⚠️ Using base prompt (Payload unavailable):', error);

    return SYSTEM_PROMPT;
  }
}
