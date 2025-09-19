// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Link } from '@/i18n/navigation'
import { ArrowRightIcon, StarIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

interface PostItemProps {
  title: string
  description: string
  slug: string
  featured?: boolean
}

export function PostItem({ description, slug, title, featured }: PostItemProps) {
  const t = useTranslations('components')

  return (
    <div className="py-6 last:border-b-0 border-l-8 border-primary rounded-md px-4">
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold transition-colors">{title}</h3>
          {featured ? <StarIcon className="text-yellow-500 size-3" /> : null}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="flex justify-end w-full">
          <Button>
            <Link
              href={`/blog/${slug}`}
              className="inline-flex items-center gap-x-2 text-sm transition-colors font-medium"
            >
              {t('postCard.readMore')} <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
