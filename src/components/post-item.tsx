// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Link } from '@/i18n/navigation'
import { ArrowRightIcon, StarIcon } from '@radix-ui/react-icons'

type PostItemProps = {
  title: string
  description: string
  slug: string
  featured?: boolean
}

export function PostItem({ description, slug, title, featured }: PostItemProps) {
  const t = useTranslations('components')

  return (
    <div className="group py-6 border-b border-border last:border-b-0">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold transition-colors">{title}</h3>
          {featured ? <StarIcon className="text-yellow-500 size-3" /> : null}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-x-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          {t('postCard.readMore')} <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}
