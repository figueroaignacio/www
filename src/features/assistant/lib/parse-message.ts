export const ASSISTANT_TAGS = {
  PROJECTS: '[SHOW_PROJECTS]',
  EXPERIENCE: '[SHOW_EXPERIENCE]',
  CONTACT: '[SHOW_CONTACT]',
} as const;

export function parseMessageContent(content: string) {
  const showProjects = content.includes(ASSISTANT_TAGS.PROJECTS);
  const showExperience = content.includes(ASSISTANT_TAGS.EXPERIENCE);
  const showContact = content.includes(ASSISTANT_TAGS.CONTACT);

  const tagsRegex = new RegExp(
    Object.values(ASSISTANT_TAGS)
      .map((tag) => tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|'),
    'g',
  );

  const cleanContent = content.replace(tagsRegex, '').trim();

  return {
    showProjects,
    showExperience,
    showContact,
    cleanContent,
  };
}
