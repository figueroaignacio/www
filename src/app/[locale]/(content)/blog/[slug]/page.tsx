// Components
import { BackButton } from '@/components/back-button';
import { PostHeader } from '@/components/post-header';
import { RichText } from '@payloadcms/richtext-lexical/react';

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
  const locales: Locale[] = ['es', 'en'];
  const allPosts = await Promise.all(locales.map((locale) => getPosts(locale)));

  const params: { slug: string; locale: Locale }[] = [];

  locales.forEach((locale, i) => {
    allPosts[i].forEach((post: Post) => {
      params.push({ slug: post.slug, locale });
    });
  });

  return params;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);

  if (!post) {
    return <p className="text-red-600/30">Error</p>;
  }

  return (
    <article className="space-y-3">
      <BackButton />
      <PostHeader description={post.description} title={post.title} />
      <RichText data={post.body} className="prose" />
    </article>
  );
}
