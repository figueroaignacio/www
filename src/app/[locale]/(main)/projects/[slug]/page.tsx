import { getProjectBySlug, getProjects } from '@/features/projects/api/projects';
import { ProjectHeaderPage } from '@/features/projects/components/project-header-page';
import { ProjectVideo } from '@/features/projects/components/project-video';
import { SITE_URL } from '@/lib/constants';
import type { Project } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ProjectPageProps {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8 animate-fade-in-up">
      <ProjectHeaderPage
        title={project.title}
        description={project.description}
        demo={project.demo || ''}
        repository={project.repository || ''}
        icon={project.icon as string}
      />

      <div className="animate-fade-in-up delay-150">
        <ProjectVideo videoUrl={project.videoUrl} />
      </div>

      <div className="animate-fade-in-up delay-300 mt-12 mb-20">
        <RichText
          data={project.body}
          className="prose prose-neutral dark:prose-invert max-w-none font-light leading-relaxed"
        />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      locale: locale,
      url: `${SITE_URL}/${locale}/projects/${slug}`,
      siteName: '${SITE_URL}',
      images: [
        {
          url: `/${locale}/projects/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
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

export async function generateStaticParams() {
  try {
    const locales: Locale[] = ['es', 'en'];
    const allProjects = await Promise.all(
      locales.map(async (locale) => {
        try {
          return await getProjects(locale);
        } catch (error) {
          console.warn(`Failed to fetch posts for locale ${locale}:`, error);
          return [];
        }
      }),
    );

    const params: { slug: string; locale: Locale }[] = [];

    locales.forEach((locale, i) => {
      allProjects[i].forEach((project: Project) => {
        if (project?.slug) {
          params.push({ slug: project.slug, locale });
        }
      });
    });

    return params;
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}
