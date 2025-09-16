// Hooks
import { useTranslations } from 'next-intl'

// Components
import { Link } from '@/i18n/navigation'
import { ArrowRightIcon } from '@radix-ui/react-icons'

interface PostItemProps {
  title: string
  description: string
  slug: string
}

export function PostItem({ description, slug, title }: PostItemProps) {
  const t = useTranslations('components')

  return (
    <div className="group py-6 border-b border-border last:border-b-0">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <Link
          href={`/post/${slug}`}
          className="inline-flex items-center gap-x-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          {t('postCard.readMore')} <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}
