// Hooks
import { useTranslations } from 'next-intl';

// Icons
import {
  AstroIcon,
  CSSIcon,
  CVAIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  JsonIcon,
  MDXIcon,
  MarkdownIcon,
  MaterialIcon,
  NextJSIcon,
  NodeJSIcon,
  PGIcon,
  PayloadIcon,
  PnpmIcon,
  PrismaIcon,
  RadixIcon,
  ReactHookFormIcon,
  ReactIcon,
  ReactRouterIcon,
  SanityIcon,
  TailwindIcon,
  TurborepoIcon,
  TypeOrmIcon,
  TypescriptIcon,
  VeliteIcon,
  ViteIcon,
  ZodIcon,
} from '@/components/tech-icons';

export function TechStack() {
  const t = useTranslations('sections');

  const techStack = [
    {
      category: t('techStack.categories.frontend'),
      items: [
        { name: 'React', icon: ReactIcon },
        { name: 'NextJS', icon: NextJSIcon },
        { name: 'Vite', icon: ViteIcon },
        { name: 'Typescript', icon: TypescriptIcon },
        { name: 'Javascript', icon: JavascriptIcon },
        { name: 'TailwindCSS', icon: TailwindIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'HTML', icon: HTMLIcon },
        { name: 'Material UI', icon: MaterialIcon },
        { name: 'Astro', icon: AstroIcon },
        { name: 'Radix UI', icon: RadixIcon },
        { name: 'React Router', icon: ReactRouterIcon },
        { name: 'React Hook Form', icon: ReactHookFormIcon },
        { name: 'CVA', icon: CVAIcon },
      ],
    },
    {
      category: t('techStack.categories.backend'),
      items: [
        { name: 'NodeJS', icon: NodeJSIcon },
        { name: 'Express', icon: ExpressIcon },
        { name: 'PostgreSQL', icon: PGIcon },
        { name: 'Prisma', icon: PrismaIcon },
        { name: 'TypeORM', icon: TypeOrmIcon },
      ],
    },
    {
      category: t('techStack.categories.cms'),
      items: [
        { name: 'Sanity', icon: SanityIcon },
        { name: 'Payload', icon: PayloadIcon },
        { name: 'Velite', icon: VeliteIcon },
      ],
    },
    {
      category: t('techStack.categories.others'),
      items: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'PNPM', icon: PnpmIcon },
        { name: 'Turborepo', icon: TurborepoIcon },
        { name: 'MDX', icon: MDXIcon },
        { name: 'Markdown', icon: MarkdownIcon },
        { name: 'JSON', icon: JsonIcon },
        { name: 'Zod', icon: ZodIcon },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="mb-8 font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-primary">
        Stack
      </h2>
      {techStack.map((section) => (
        <div key={section.category}>
          <h3 className="mb-4">{section.category}: </h3>
          <div className="flex flex-wrap gap-2">
            {section.items.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 bg-card p-4 rounded-lg border-border border animate-show"
              >
                <Icon />
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
