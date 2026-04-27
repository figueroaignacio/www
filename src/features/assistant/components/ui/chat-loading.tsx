import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export function ChatLoading() {
  const t = useTranslations('components.chat.messages');

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <div className="flex gap-1">
          <span
            className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '1.2s' }}
          />
          <span
            className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
            style={{ animationDelay: '150ms', animationDuration: '1.2s' }}
          />
          <span
            className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
            style={{ animationDelay: '300ms', animationDuration: '1.2s' }}
          />
        </div>
        <span>{t('thinking')}</span>
      </div>
    </motion.div>
  );
}
