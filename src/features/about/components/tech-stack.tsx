'use client';

import { motion, type Variants } from 'motion/react';
import { useTranslations } from 'next-intl';

import { CSSIcon } from '@/components/tech-icons/css-icon';
import { ClaudeCodeIcon } from '@/components/tech-icons/claude-code-icon';
import { FastAPIIcon } from '@/components/tech-icons/fastapi-icon';
import { GeminiIcon } from '@/components/tech-icons/gemini-icon';
import { GitHubIcon } from '@/components/tech-icons/github-icon';
import { GitIcon } from '@/components/tech-icons/git-icon';
import { GoogleAntigravityIcon } from '@/components/tech-icons/google-antigravity-icon';
import { GroqAiIcon } from '@/components/tech-icons/groq-ai-icon';
import { HTMLIcon } from '@/components/tech-icons/html-icon';
import { LinuxIcon } from '@/components/tech-icons/linux-icon';
import { FedoraIcon } from '@/components/tech-icons/fedora-icon';
import { NestJsIcon } from '@/components/tech-icons/nestjs-icon';
import { NextJSIcon } from '@/components/tech-icons/nextjs-icon';
import { NodeJSIcon } from '@/components/tech-icons/nodejs-icon';
import { OpenCodeIcon } from '@/components/tech-icons/open-code-icon';
import { PGIcon } from '@/components/tech-icons/pg-icon';
import { PnpmIcon } from '@/components/tech-icons/pnpm-icon';
import { PythonIcon } from '@/components/tech-icons/python-icon';
import { ReactIcon } from '@/components/tech-icons/react-icon';
import { TailwindIcon } from '@/components/tech-icons/tailwind-icon';
import { TurborepoIcon } from '@/components/tech-icons/turborepo-icon';
import { TypescriptIcon } from '@/components/tech-icons/typescript-icon';
import { UVIcon } from '@/components/tech-icons/uv-icon';
import { VercelIcon } from '@/components/tech-icons/vercel-icon';
import { ViteIcon } from '@/components/tech-icons/vite-icon';

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

export function TechStack() {
  const t = useTranslations('sections');

  const techStack = [
    {
      category: t('stack.categories.frontend'),
      items: [
        { name: 'Vite', icon: ViteIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'NextJS', icon: NextJSIcon },
        { name: 'TypeScript', icon: TypescriptIcon },
        { name: 'TailwindCSS', icon: TailwindIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'HTML', icon: HTMLIcon },
      ],
    },
    {
      category: t('stack.categories.backend'),
      items: [
        { name: 'NodeJS', icon: NodeJSIcon },
        { name: 'Nest.js', icon: NestJsIcon },
        { name: 'Python', icon: PythonIcon },
        { name: 'FastAPI', icon: FastAPIIcon },
        { name: 'PostgreSQL', icon: PGIcon },
      ],
    },
    {
      category: t('stack.categories.ai'),
      items: [
        { name: 'Claude Code', icon: ClaudeCodeIcon },
        { name: 'Open Code', icon: OpenCodeIcon },
        { name: 'Google Antigravity', icon: GoogleAntigravityIcon },
        { name: 'Vercel AI SDK', icon: VercelIcon },
        { name: 'GenAI SDK', icon: GeminiIcon },
        { name: 'Groq SDK', icon: GroqAiIcon },
      ],
    },
    {
      category: t('stack.categories.others'),
      items: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'pnpm', icon: PnpmIcon },
        { name: 'Turborepo', icon: TurborepoIcon },
        { name: 'UV', icon: UVIcon },
        { name: 'Linux', icon: LinuxIcon },
        { name: 'Fedora', icon: FedoraIcon },
      ],
    },
  ];

  return (
    <section className="space-y-8" aria-labelledby="tech-stack-title">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={itemVariants}
        className="space-y-2"
      >
        <h2 id="tech-stack-title" className="text-2xl font-medium tracking-tight">
          {t('stack.title')}
        </h2>
        <p className="text-lg text-muted-foreground font-normal mt-1 max-w-xl">
          {t('stack.description')}
        </p>
      </motion.div>

      <div className="space-y-6">
        {techStack.map((section) => (
          <div key={section.category} className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 ml-1">
              {section.category}
            </h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-2"
              role="list"
            >
              {section.items.map(({ name, icon: Icon }) => (
                <motion.li
                  key={name}
                  variants={itemVariants}
                  whileHover={{ y: -2, backgroundColor: 'var(--color-secondary)' }}
                  className="flex items-center gap-2 rounded-full border-border border px-3 py-1.5 bg-background/40 backdrop-blur-[2px] transition-colors duration-200 group"
                  role="listitem"
                >
                  <span aria-hidden="true" className="size-4 flex items-center justify-center">
                    <Icon />
                  </span>
                  <span className="text-xs font-medium">{name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
}
