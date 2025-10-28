// Components
import { BackButton } from '@/components/back-button';
import { PostHeader } from '@/components/post-header';
import { RichText } from '@payloadcms/richtext-lexical/react';

// Utils
import { getProjectBySlug } from '@/api/projects';

// Types
import { type Project } from '@/payload-types';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project: Project = await getProjectBySlug(slug);

  if (!project) {
    return <p className="text-red-600/30">Error</p>;
  }

  return (
    <article className="container space-y-3">
      <BackButton />
      <PostHeader title={project.title} description={project.description} variant="project" />
      <RichText data={project.body} className="prose" />
    </article>
  );
}
