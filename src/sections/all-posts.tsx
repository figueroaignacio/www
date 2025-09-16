// Components
import { PostItem } from '@/components/post-item'

// Utiñs
import { getPosts } from '@/lib/services'
import { getLocale } from 'next-intl/server'

// Types
import { Post } from '@/payload-types'

export async function AllPosts() {
  const locale = await getLocale()
  const posts: Post[] = await getPosts(locale)

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostItem title={post.title} description={post.description} slug={post.slug} />
        </li>
      ))}
    </ul>
  )
}
