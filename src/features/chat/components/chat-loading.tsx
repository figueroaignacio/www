import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

export function ChatLoading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3"
    >
      <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-background" />
      </div>
      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2.5">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
      </div>
    </motion.div>
  );
}
