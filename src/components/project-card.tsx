// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Link } from '@/i18n/navigation'
import { ExternalLinkIcon, GitHubLogoIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card'

// Types
import { type Project } from '@/payload-types'

interface ProjectCardProps
  extends Pick<
    Project,
    | 'title'
    | 'subtitle'
    | 'description'
    | 'featured'
    | 'technologies'
    | 'repository'
    | 'demo'
    | 'slug'
  > {}

export function ProjectCard({
  description,
  subtitle,
  title,
  demo,
  featured,
  repository,
  technologies,
  slug,
}: ProjectCardProps) {
  const t = useTranslations('components')

  const actions = [
    {
      label: t('projectCard.actions.sourceCode'),
      href: repository,
      variant: 'default' as const,
      icon: <GitHubLogoIcon />,
    },
    {
      label: t('projectCard.actions.demo'),
      href: demo,
      variant: 'default' as const,
      icon: <ExternalLinkIcon />,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <h3 className="font-semibold">{subtitle}</h3>
      </CardHeader>
      <CardFooter className="flex-col items-start space-y-5">
        <div className="flex gap-3 flex-wrap">
          {technologies?.map((technology) => (
            <span
              key={technology.name}
              className="text-xs border-border border rounded-full px-3 py-1"
            >
              {technology.name}
            </span>
          ))}
        </div>
        <div className="space-x-3 w-full flex">
          {actions.map((action) => (
            <Button variant={action.variant} key={action.href} className="w-full">
              <a href={action.href ?? undefined} className="flex gap-3 items-center">
                {action.label}
                {action.icon}
              </a>
            </Button>
          ))}
        </div>
        <div className="w-full">
          <Button variant="outline" className="w-full">
            <Link href={`/projects/${slug}`} className="flex gap-3 items-center">
              {t('projectCard.actions.learnMore')}
              <InfoCircledIcon />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
