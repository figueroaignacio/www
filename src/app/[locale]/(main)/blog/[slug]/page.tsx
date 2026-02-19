export const revalidate = 3600;
export const dynamic = 'force-static';

import { getPostBySlug, getPosts } from '@/features/blog/api/posts';
import { CommentCTA } from '@/features/blog/components/comment-cta';
import { CommentsWithAuth } from '@/features/blog/components/comments-with-auth';
import { PostHeader } from '@/features/blog/components/post-header';
import { CustomRichText } from '@/features/blog/components/rich-text';
import { SITE_URL } from '@/lib/constants';
import type { Post } from '@/payload-types';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

interface PostPageProps {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  return (
    <article>
      <PostHeader
        description={post.description}
        title={post.title}
        createdAt={post.createdAt}
        categories={post.categories}
      />
      <CustomRichText data={post.body} className="prose prose-invert max-w-none" />
      <CommentsWithAuth postId={post.id} slug={slug} />
      <CommentCTA />
    </article>
  );
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.description;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.keywords?.map((k: { keyword?: string }) => k.keyword),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      locale: locale,
      url: `${SITE_URL}/${locale}/blog/${slug}`,
      siteName: SITE_URL,
      images: [
        {
          url: `/${locale}/blog/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`/${locale}/blog/${slug}/opengraph-image`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${slug}`,
      languages: {
        es: `${SITE_URL}/es/blog/${slug}`,
        en: `${SITE_URL}/en/blog/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export async function generateStaticParams() {
  try {
    const locales: Locale[] = ['es', 'en'];
    const allPosts = await Promise.all(
      locales.map(async (locale) => {
        try {
          return await getPosts(locale);
        } catch (error) {
          console.warn(`Failed to fetch posts for locale ${locale}:`, error);
          return [];
        }
      }),
    );

    const params: { slug: string; locale: Locale }[] = [];

    locales.forEach((locale, i) => {
      allPosts[i].forEach((post: Post) => {
        if (post?.slug) {
          params.push({ slug: post.slug, locale });
        }
      });
    });

    return params;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}
