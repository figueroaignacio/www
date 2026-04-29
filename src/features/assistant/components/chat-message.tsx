import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';
import type { Message } from '../types';
import { ChatContactCards } from './cards/chat-contact-cards';
import { ChatExperienceCards } from './cards/chat-experience-cards';
import { ChatProjectCards } from './cards/chat-project-cards';
import { ChatMarkdownContent } from './ui/chat-markdown-content';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
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
          <div className="flex flex-col space-y-12">
            {cleanContent && <ChatMarkdownContent content={cleanContent} />}
            <Separator label="o" />
            {showProjects && <ChatProjectCards />}
            <Separator label="o" />
            {showExperience && <ChatExperienceCards />}
            <Separator label="o" />
            {showContact && <ChatContactCards />}
          </div>
        )}
      </div>
    </motion.div>
  );
}
