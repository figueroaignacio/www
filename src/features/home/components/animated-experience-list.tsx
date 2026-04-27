'use client';

import { motion, type Variants } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedExperienceListProps {
  children: ReactNode[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export function AnimatedExperienceList({ children }: AnimatedExperienceListProps) {
  return (
    <motion.ol
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative space-y-0"
    >
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        className="absolute left-[11px] top-2 w-px bg-linear-to-b from-foreground/50 via-border to-border"
      />

      {children.map((child, index) => (
        <motion.li key={index} variants={itemVariants} className="relative pl-10 pb-8 last:pb-0">
          {child}
        </motion.li>
      ))}
    </motion.ol>
  );
}
