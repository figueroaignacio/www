'use client';

import { Badge } from '@/components/ui/badge';
import {
  Blocks,
  Bot,
  FlaskConical,
  Globe,
  LayoutTemplate,
  LucideIcon,
  Palette,
  ScanFace,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { useTranslations } from 'next-intl';

type InterestConfig = {
  key: string;
  icon: LucideIcon;
};

const INTERESTS_CONFIG: InterestConfig[] = [
  { key: 'frontend', icon: LayoutTemplate },
  { key: 'backend', icon: Server },
  { key: 'ai', icon: Bot },
  { key: 'prompts', icon: Terminal },
  { key: 'arch', icon: Blocks },
  { key: 'clean', icon: ShieldCheck },
  { key: 'ui', icon: Palette },
  { key: 'a11y', icon: ScanFace },
  { key: 'perf', icon: Zap },
  { key: 'qa', icon: FlaskConical },
  { key: 'devops', icon: Workflow },
  { key: 'opensource', icon: Globe },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export function Interests() {
  const t = useTranslations('sections.interests.items');
  const tSection = useTranslations('sections.interests');

  return (
    <section className="space-y-6" aria-labelledby="interests-title">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={itemVariants}
        className="space-y-2"
      >
        <h2 id="interests-title" className="text-lg font-medium">
          {tSection('title')}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{tSection('description')}</p>
      </motion.div>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-wrap gap-2"
        role="list"
      >
        {INTERESTS_CONFIG.map(({ key, icon: Icon }) => (
          <motion.li key={key} variants={itemVariants} role="listitem">
            <Badge
              variant="outline"
              className="space-x-3 py-2 px-4 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 cursor-default group"
            >
              <Icon
                className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors"
                aria-hidden="true"
              />
              <span className="text-xs">{t(key)}</span>
            </Badge>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
