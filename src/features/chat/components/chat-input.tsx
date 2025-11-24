import { motion } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ChatInputProps {
  message: string;
  isLoading: boolean;
  onMessageChange: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function ChatInput({
  message,
  isLoading,
  onMessageChange,
  onSubmit,
  onKeyPress,
}: ChatInputProps) {
  const t = useTranslations('components.chat.input');

  return (
    <form onSubmit={onSubmit} className="p-4 bg-card border-t border-border">
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyPress={onKeyPress}
          disabled={isLoading}
          className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground/20 text-sm placeholder:text-muted-foreground transition disabled:opacity-50"
          placeholder={t('placeholder')}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading || !message.trim()}
          className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </motion.button>
      </div>
    </form>
  );
}
