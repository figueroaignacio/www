// Components
import { motion } from 'framer-motion';
import { BotMessageSquare, Loader2 } from 'lucide-react';

export function ChatLoading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0">
        <BotMessageSquare className="w-6 h-6 text-foreground" />
      </div>
      <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-2.5">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
      </div>
    </motion.div>
  );
}
