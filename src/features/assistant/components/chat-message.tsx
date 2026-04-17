import { motion } from 'motion/react';
import React from 'react';
import type { Message } from '../types';
import { ChatMarkdownContent } from './chat-markdown-content';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = React.memo(function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-full py-2  ${isUser ? 'bg-secondary-foreground text-background rounded-3xl rounded-tr-xs' : 'border border-border rounded-tl-xs rounded-3xl px-5'}`}
      >
        {isUser ? (
          <p className="text-base whitespace-pre-wrap leading-relaxed px-5">{message.content}</p>
        ) : (
          <ChatMarkdownContent content={message.content} />
        )}
      </div>
    </motion.div>
  );
});
