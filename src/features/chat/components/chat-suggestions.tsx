import { Code2, Lightbulb, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

interface ChatSuggestionsProps {
  onSuggestionClick: (text: string) => void;
}

export function ChatSuggestions({ onSuggestionClick }: ChatSuggestionsProps) {
  const t = useTranslations('components.chat.suggestions');

  const suggestions = [
    {
      icon: MessageSquare,
      text: t('who'),
    },
    {
      icon: Code2,
      text: t('technologies'),
    },
    {
      icon: Sparkles,
      text: t('education'),
    },
    {
      icon: Lightbulb,
      text: t('funFact'),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 py-8">
      <div className="flex flex-wrap  gap-3">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSuggestionClick(suggestion.text)}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/30 transition-all duration-200"
            >
              <Icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground/80">{suggestion.text}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
