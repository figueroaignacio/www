'use client';

import { motion, type Variants } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Interests } from './interests';
import { TechStack } from './tech-stack';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function AboutContent() {
  const t = useTranslations('sections.aboutMe.content');

  return (
    <motion.section
      className="relative min-h-[70vh] py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid  gap-8 md:gap-16 items-start w-full">
        <div className="md:col-span-8 lg:col-span-9 space-y-8">
          <div className="space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-medium tracking-tight text-foreground"
            >
              {t('title')}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground font-normal">
              {t('subtitle')}
            </motion.p>
          </div>
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p className="">{t('bio')}</p>
            <p className="font-light italic text-muted-foreground">{t('details')}</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-2 pt-4 border-t border-border"
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              React • Next.js • TypeScript • Node.js • AI Integration • Clean Architecture • Linux •
              Fedora
            </p>
          </motion.div>

          <div className="pt-16 space-y-24">
            <TechStack />
            <Interests />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
