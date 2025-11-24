// Hooks
import { useTranslations } from 'next-intl';

// Components
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ChatNaiAvatar } from './chat-nai-avatar';

interface ChatHeaderProps {
  onClose?: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  const t = useTranslations('components.chat.header');

  return (
    <div className="relative bg-card p-4 border-b border-border">
      <div className="relative flex items-center gap-3">
        <ChatNaiAvatar />
        <div className="flex-1">
          <h2 className="font-medium text-foreground">{t('title')}</h2>
          <p className="text-xs text-muted-foreground">{t('subtitle')}</p>
        </div>

        {/* Close button - only visible on mobile */}
        {onClose && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="md:hidden w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-foreground" />
          </motion.button>
        )}

        {/* Online indicator - hidden on mobile when close button is present */}
        <div className={`w-2 h-2 bg-green-500 rounded-full ${onClose ? 'hidden md:block' : ''}`} />
      </div>
    </div>
  );
}
