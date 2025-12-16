// Hooks
import { useTranslations } from 'next-intl';

// Components
import { BotMessageSquare, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ChatLoading() {
  const t = useTranslations('components.chat.messages');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0">
        <BotMessageSquare className="w-6 h-6 text-foreground" />
      </div>
      <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-2.5 flex items-center gap-x-3 text-xs animate-pulse">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
        <span className="text-muted-foreground">{t('thinking')}</span>
      </div>
    </motion.div>
  );
}
