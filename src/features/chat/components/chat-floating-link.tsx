'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from '@/i18n/navigation';
import { BotMessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function ChatFloatingLink() {
  const [isHovered, setIsHovered] = useState(false);
  const [autoShowTooltip, setAutoShowTooltip] = useState(false);
  const t = useTranslations('components.chat.messages');
  const pathname = usePathname();

  if (pathname?.includes('/chat')) return null;

  useEffect(() => {
    const showTimer = setTimeout(() => setAutoShowTooltip(true), 1000);
    const hideTimer = setTimeout(() => setAutoShowTooltip(false), 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const shouldShowTooltip = isHovered || autoShowTooltip;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Tooltip open={shouldShowTooltip} onOpenChange={setIsHovered} delayDuration={0}>
        <TooltipTrigger asChild>
          <Link href="/chat">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group p-4 rounded-full shadow-lg bg-foreground text-background"
            >
              <BotMessageSquare className="w-6 h-6" />
            </motion.button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="text-sm font-bold">
          {t('tooltip')}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
