import React from 'react';
import { motion } from 'motion/react';
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
        className={`max-w-full py-4  ${isUser ? 'bg-secondary/60 rounded-3xl rounded-tr-xs' : ''}`}
      >
        {isUser ? (
          <p className="text-base whitespace-pre-wrap leading-relaxed px-5">{message.content}</p>
        ) : (
          <div>
            <ChatMarkdownContent content={message.content} />
          </div>
        )}
      </div>
    </motion.div>
  );
});
