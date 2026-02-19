'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export function CommentCTA() {
  const t = useTranslations('components.commentNotification');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -50, x: '-50%', transition: { duration: 0.3 } }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed top-16 left-1/2 container cursor-pointer"
          style={{ x: '-50%' }}
          onClick={() => {
            document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' });
            setIsVisible(false);
          }}
        >
          <div className="relative bg-card p-5 rounded-lg flex items-start gap-4">
            <div className="relative shrink-0">
              <img
                src="https://github.com/figueroaignacio.png"
                alt="Ignacio Figueroa"
                className="size-12 rounded-full border border-border"
              />
              <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-background text-[12px]">
                💬
              </span>
            </div>

            <div className="flex-1 min-w-0 py-0.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-semibold text-foreground truncate">
                  {t('user')}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{t('time')}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-snug mt-1">{t('message')}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
