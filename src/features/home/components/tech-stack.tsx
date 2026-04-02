import {
  AstroIcon,
  CSSIcon,
  ClaudeAiIcon,
  GeminiIcon,
  GitHubIcon,
  GitIcon,
  GroqAiIcon,
  HTMLIcon,
  NestJsIcon,
  NextJSIcon,
  NodeJSIcon,
  OpenAiIcon,
  PGIcon,
  PayloadIcon,
  PnpmIcon,
  PrismaIcon,
  ReactIcon,
  ReactRouterIcon,
  SanityIcon,
  TailwindIcon,
  TurborepoIcon,
  TypeOrmIcon,
  TypescriptIcon,
  VeliteIcon,
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
        { name: 'React Router', icon: ReactRouterIcon },
        { name: 'NextJS', icon: NextJSIcon },
        { name: 'Astro', icon: AstroIcon },
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
        { name: 'PostgreSQL', icon: PGIcon },
        { name: 'Prisma', icon: PrismaIcon },
        { name: 'TypeORM', icon: TypeOrmIcon },
      ],
    },
    {
      category: t('stack.categories.ai'),
      items: [
        { name: 'OpenAI', icon: OpenAiIcon },
        { name: 'Claude / Anthropic', icon: ClaudeAiIcon },
        { name: 'Gemini', icon: GeminiIcon },
        { name: 'Gen AI SDK', icon: GeminiIcon },
        { name: 'Groq SDK', icon: GroqAiIcon },
      ],
    },
    {
      category: t('stack.categories.cms'),
      items: [
        { name: 'Sanity', icon: SanityIcon },
        { name: 'Payload', icon: PayloadIcon },
        { name: 'Velite', icon: VeliteIcon },
      ],
    },
    {
      category: t('stack.categories.others'),
      items: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'PNPM', icon: PnpmIcon },
        { name: 'Turborepo', icon: TurborepoIcon },
      ],
    },
  ];

  return (
    <section className="space-y-3" aria-labelledby="tech-stack-title">
      <div className="space-y-2">
        <h2 id="tech-stack-title" className="text-lg font-medium">{t('stack.title')}</h2>
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
