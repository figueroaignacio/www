import { motion } from 'motion/react';
import React from 'react';
import type { Message } from '../types';
import { ChatMarkdownContent } from './chat-markdown-content';
import { ChatProjectCards } from './chat-project-cards';
import { ChatExperienceCards } from './chat-experience-cards';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = React.memo(function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const showProjects = message.content.includes('[SHOW_PROJECTS]');
  const showExperience = message.content.includes('[SHOW_EXPERIENCE]');
  const cleanContent = message.content
    .replace('[SHOW_PROJECTS]', '')
    .replace('[SHOW_EXPERIENCE]', '')
    .trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-full py-2  ${isUser ? 'bg-secondary-foreground text-background rounded-3xl rounded-tr-xs' : ''}`}
      >
        {isUser ? (
          <p className="text-base whitespace-pre-wrap leading-relaxed px-5">{cleanContent}</p>
        ) : (
          <div className="flex flex-col gap-2">
            {cleanContent && <ChatMarkdownContent content={cleanContent} />}
            {showProjects && <ChatProjectCards />}
            {showExperience && <ChatExperienceCards />}
          </div>
        )}
      </div>
    </motion.div>
  );
});
