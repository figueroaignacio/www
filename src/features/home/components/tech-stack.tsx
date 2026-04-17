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
      ],
    },
  ];

  return (
    <section className="space-y-3" aria-labelledby="tech-stack-title">
      <div className="space-y-2">
        <h2 id="tech-stack-title" className="text-lg font-medium">
          {t('stack.title')}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">{t('stack.description')}</p>
      </div>
      {techStack.map((section) => (
        <div key={section.category}>
          <h3>{section.category}</h3>
          <ul className="flex flex-wrap gap-2 py-5" role="list">
            {section.items.map(({ name, icon: Icon }) => {
              return (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-full border-border border px-4 py-1.5 bg-background/40"
                  role="listitem"
                >
                  <span aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="text-sm">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
