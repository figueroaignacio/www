'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: AnimationVariant;
};

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimateIn({
  children,
  delay = 0,
  className = '',
  variant = 'fadeUp',
}: AnimateInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
