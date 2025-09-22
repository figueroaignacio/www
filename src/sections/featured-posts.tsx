// Components
import { PostItem } from '@/components/post-item'
import { Link } from '@/i18n/navigation'
import { ArrowRightIcon } from '@radix-ui/react-icons'

// Utils
import { getFeaturedPosts } from '@/lib/services'
import { getLocale, getTranslations } from 'next-intl/server'

// Types
import { type Post } from '@/payload-types'

export async function FeaturedPosts() {
  const locale = await getLocale()
  const posts: Post[] = await getFeaturedPosts(locale)
  const t = await getTranslations('sections')

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-lg font-bold mb-3">{t('featuredPosts.heading')}</h2>
        <Link
          href="/blog"
          className="text-xs hidden items-center gap-x-1 text-muted-foreground hover:text-primary hover:underline md:flex"
        >
          {t('featuredPosts.seeAllPosts')}
          <ArrowRightIcon />
        </Link>
      </div>
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostItem
              title={post.title}
              description={post.description}
              slug={post.slug}
              featured={!!post.featured}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
