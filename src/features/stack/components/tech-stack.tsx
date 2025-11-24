// Hooks
import { useTranslations } from 'next-intl';

// Components
import { AnimateIn } from '@/components/animate-in';
import {
  AstroIcon,
  CSSIcon,
  ClaudeAiIcon,
  GitHubIcon,
  GitIcon,
  GroqAiIcon,
  HTMLIcon,
  MDXIcon,
  MarkdownIcon,
  MaterialIcon,
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
} from '@/features/stack/components/tech-icons';

export function TechStack() {
  const t = useTranslations('sections');

  const techStack = [
    {
      category: t('stack.categories.frontend'),
      items: [
        { name: 'React', icon: ReactIcon },
        { name: 'React Router', icon: ReactRouterIcon },
        { name: 'Vite', icon: ViteIcon },
        { name: 'NextJS', icon: NextJSIcon },
        { name: 'Astro', icon: AstroIcon },
        { name: 'TypeScript', icon: TypescriptIcon },
        { name: 'TailwindCSS', icon: TailwindIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'HTML', icon: HTMLIcon },
        { name: 'Material UI', icon: MaterialIcon },
        { name: 'MDX', icon: MDXIcon },
        { name: 'Markdown', icon: MarkdownIcon },
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
        { name: 'Groq', icon: GroqAiIcon },
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
    <div className="space-y-8">
      {techStack.map((section, sectionIndex) => {
        const sectionDelay = 0.1 + sectionIndex * 0.2;
        return (
          <AnimateIn key={section.category} variant="fadeUp" delay={sectionDelay}>
            <div>
              <h3 className="mb-4 text-sm">{section.category}: </h3>
              <div className="flex flex-wrap gap-10">
                {section.items.map(({ name, icon: Icon }, itemIndex) => {
                  const itemDelay = sectionDelay + 0.05 + itemIndex * 0.03;
                  return (
                    <AnimateIn key={name} variant="scale" delay={itemDelay}>
                      <div className="flex flex-col items-center gap-2 backdrop-blur-3xl rounded-lg">
                        <Icon />
                        <span className="text-xs">{name}</span>
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>
            </div>
          </AnimateIn>
        );
      })}
    </div>
  );
}
