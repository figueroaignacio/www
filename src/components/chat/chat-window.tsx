// Components
import { AnimatePresence, motion } from 'framer-motion';
import { ChatHeader } from './chat-header';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';

interface ChatWindowProps {
  isOpen: boolean;
  messages: any[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  message: string;
  onMessageChange: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function ChatWindow({
  isOpen,
  messages,
  isLoading,
  messagesEndRef,
  message,
  onMessageChange,
  onSubmit,
  onKeyPress,
}: ChatWindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute bottom-20 right-0 w-[380px] h-[580px] bg-card shadow-2xl rounded-2xl border border-border overflow-hidden flex flex-col"
        >
          <ChatHeader />
          <ChatMessages messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
          <ChatInput
            message={message}
            isLoading={isLoading}
            onMessageChange={onMessageChange}
            onSubmit={onSubmit}
            onKeyPress={onKeyPress}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
