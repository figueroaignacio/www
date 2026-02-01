// Components
import { motion } from 'motion/react';
import { ChatMarkdownContent } from './chat-markdown-content';

// Types
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`rounded-lg px-8 py-4  ${
          isUser ? 'bg-foreground text-background rounded-tr-sm' : 'bg-card rounded-tl-sm'
        }`}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm">
            <ChatMarkdownContent content={message.content} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
