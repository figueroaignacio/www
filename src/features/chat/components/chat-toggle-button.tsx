// Hooks
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

// Components
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { BotMessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatToggleButton({ isOpen, onClick }: ChatToggleButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [autoShowTooltip, setAutoShowTooltip] = useState(false);
  const t = useTranslations('components.chat.messages');

  useEffect(() => {
    const showTimer = setTimeout(() => setAutoShowTooltip(true), 1000);
    const hideTimer = setTimeout(() => setAutoShowTooltip(false), 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const shouldShowTooltip = (isHovered || autoShowTooltip) && !isOpen;

  return (
    <Tooltip open={shouldShowTooltip} onOpenChange={setIsHovered} delayDuration={0}>
      <TooltipTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="relative group p-4 rounded-full shadow-lg bg-foreground text-background z-50"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <BotMessageSquare className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side="left" className="text-sm font-bold">
        {t('tooltip')}
      </TooltipContent>
    </Tooltip>
  );
}
