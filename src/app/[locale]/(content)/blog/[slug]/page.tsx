export const dynamic = 'force-dynamic';
export const revalidate = 3600;

// Components
import { BackButton } from '@/components/back-button';
import { Error } from '@/components/error';
import { PostHeader } from '@/components/post-header';
import { CustomRichText } from '@/components/rich-text';

// Utils
import { getPostBySlug, getPosts } from '@/lib/services';

// Types
import type { Post } from '@/payload-types';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

interface PostPageProps {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
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
    keywords: post.keywords?.map((k: any) => k.keyword),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      locale: locale,
      url: `https://ignaciofigueroa.vercel.app/${locale}/blog/${slug}`,
      siteName: 'https://ignaciofigueroa.vercel.app',
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

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  if (!post) {
    return <Error />;
  }

  return (
    <article className="space-y-3">
      <BackButton />
      <PostHeader description={post.description} title={post.title} />
      <CustomRichText data={post.body} className="prose prose-invert max-w-none" />
    </article>
  );
}
