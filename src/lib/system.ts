import { detectLanguage } from './language-detector';
import { SYSTEM_PROMPTS } from './prompts';
import type { Message } from './types';

export function getSystemPrompt(messages: Message[]) {
  const lang = detectLanguage(messages);
  return SYSTEM_PROMPTS[lang];
}
