'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AssistantAvatar } from './assistant-avatar';

export function ChatFloatingLink() {
  const t = useTranslations('components.chat.messages');
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runCycle = () => {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
          runCycle();
        }, 10000);
      }, 20000);
    };

    runCycle();

    return () => clearTimeout(timeoutId);
  }, []);

  if (pathname?.includes('/assistant')) return null;
  if (pathname?.includes('/blog')) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Tooltip open={true} onOpenChange={setIsHovered} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href="/assistant">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-4 rounded-full shadow-lg bg-foreground text-background"
                >
                  <AssistantAvatar size="24" />
                </motion.button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left" className="text-sm">
              {t('tooltip')}
            </TooltipContent>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
