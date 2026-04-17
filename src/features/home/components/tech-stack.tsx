import {
  CSSIcon,
  ClaudeCodeIcon,
  FastAPIIcon,
  GeminiIcon,
  GitHubIcon,
  GitIcon,
  GoogleAntigravityIcon,
  GroqAiIcon,
  HTMLIcon,
  NestJsIcon,
  NextJSIcon,
  NodeJSIcon,
  OpenCodeIcon,
  PGIcon,
  PnpmIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TurborepoIcon,
  TypescriptIcon,
  UVIcon,
  VercelIcon,
  ViteIcon,
} from '@/components/tech-icons';
import { useTranslations } from 'next-intl';

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
