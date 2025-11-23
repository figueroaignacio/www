import type { Message } from '@/lib/types';
import type { Language } from './prompts';

const SPANISH_INDICATORS = [
  'hola',
  'qué',
  'cómo',
  'por favor',
  'gracias',
  'sí',
  'no',
  'cuál',
  'cuándo',
  'dónde',
  'quién',
  'buenos',
  'días',
  'tardes',
  'ayuda',
  'información',
] as const;

export function detectLanguage(messages: Message[]): Language {
  const userMessages = messages.filter((m) => m.role === 'user');

  if (userMessages.length === 0) return 'en';

  const lastUserMessage = userMessages[userMessages.length - 1].content.toLowerCase();

  const hasSpanishWords = SPANISH_INDICATORS.some((word) => lastUserMessage.includes(word));

  return hasSpanishWords ? 'es' : 'en';
}
