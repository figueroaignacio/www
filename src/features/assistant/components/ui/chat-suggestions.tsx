import {
  BulbIcon,
  CodeIcon,
  Folder01Icon,
  Message01Icon,
  SparklesIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

interface ChatSuggestionsProps {
  onSuggestionClick: (text: string) => void;
}

export function ChatSuggestions({ onSuggestionClick }: ChatSuggestionsProps) {
  const t = useTranslations('components.chat.suggestions');

  const suggestions = [
    {
      icon: Message01Icon,
      text: t('who'),
    },
    {
      icon: Folder01Icon,
      text: t('projects'),
    },
    {
      icon: CodeIcon,
      text: t('technologies'),
    },
    {
      icon: SparklesIcon,
      text: t('education'),
    },
    {
      icon: BulbIcon,
      text: t('recruiterMode'),
    },
  ];

  return (
    <div className="flex flex-wrap max-w-lg justify-center gap-2">
      {suggestions.map((suggestion, index) => {
        const Icon = suggestion.icon;
        return (
          <motion.button
            type="button"
            key={index}
            onClick={() => onSuggestionClick(suggestion.text)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border/60 bg-card/60 hover:bg-card hover:border-border text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
          >
            <HugeiconsIcon icon={Icon} className="size-3.5 shrink-0" />
            <span className="text-xs">{suggestion.text}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
