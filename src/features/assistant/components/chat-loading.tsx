import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export function ChatLoading() {
  const t = useTranslations('components.chat.messages');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className="  flex items-center gap-x-3 text-xs animate-pulse">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
        <span className="text-muted-foreground">{t('thinking')}</span>
      </div>
    </motion.div>
  );
}
