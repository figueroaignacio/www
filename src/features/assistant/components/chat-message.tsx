import { motion } from 'motion/react';
import { memo } from 'react';
import type { Message } from '../types';
import { ChatContactCards } from './chat-contact-cards';
import { ChatExperienceCards } from './chat-experience-cards';
import { ChatMarkdownContent } from './chat-markdown-content';
import { ChatProjectCards } from './chat-project-cards';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = memo(function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const showProjects = message.content.includes('[SHOW_PROJECTS]');
  const showExperience = message.content.includes('[SHOW_EXPERIENCE]');
  const showContact = message.content.includes('[SHOW_CONTACT]');
  const cleanContent = message.content
    .replace('[SHOW_PROJECTS]', '')
    .replace('[SHOW_EXPERIENCE]', '')
    .replace('[SHOW_CONTACT]', '')
    .trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-full ${
          isUser ? 'bg-foreground text-background rounded-2xl rounded-br-sm px-4 py-2.5' : ''
        }`}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap leading-relaxed">{cleanContent}</p>
        ) : (
          <div className="flex flex-col gap-3">
            {cleanContent && <ChatMarkdownContent content={cleanContent} />}
            {showProjects && <ChatProjectCards />}
            {showExperience && <ChatExperienceCards />}
            {showContact && <ChatContactCards />}
          </div>
        )}
      </div>
    </motion.div>
  );
});
