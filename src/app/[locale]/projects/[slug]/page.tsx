// Components
import { PostHeader } from '@/features/blog/components/post-header';
import { RichText } from '@payloadcms/richtext-lexical/react';

// Utils
import { getProjectBySlug } from '@/features/projects/api/projects';

// Types
import type { Project } from '@/payload-types';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

// Constants
import { SITE_URL } from '@/lib/constants';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  const metaTitle = project.seo?.metaTitle || project.title;
  const metaDescription = project.seo?.metaDescription || project.description;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: project.keywords?.map((k: { keyword?: string }) => k.keyword),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      locale: locale,
      url: `${SITE_URL}/${locale}/projects/${slug}`,
      siteName: '${SITE_URL}',
      images: [
        {
          url: `/${locale}/projects/${slug}/opengraph-image`,
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
      images: [`/${locale}/projects/${slug}/opengraph-image`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/projects/${slug}`,
      languages: {
        es: `${SITE_URL}/es/projects/${slug}`,
        en: `${SITE_URL}/en/projects/${slug}`,
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project: Project = await getProjectBySlug(slug);

  if (!project) {
    return <p className="text-red-600/30">Error</p>;
  }

  return (
    <article className="space-y-3">
      <PostHeader title={project.title} description={project.description} />
      <RichText data={project.body} className="prose" />
    </article>
  );
}
