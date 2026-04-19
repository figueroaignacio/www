'use client';

import { ProjectCard } from '@/features/projects/components/project-card';
import type { Project } from '@/payload-types';
import { useEffect, useState } from 'react';
import { getChatProjects } from '../actions/get-chat-projects';

export function ChatProjectCards() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getChatProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects for chat', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="h-[180px] rounded-xl bg-card border border-border animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (projects.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
