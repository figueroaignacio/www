'use client';

import type { Project } from '@/payload-types';
import { useEffect, useState } from 'react';
import { getChatProjects } from '../actions/get-chat-projects';
import { ChatProjectCard } from './chat-project-card';
import { useLocale } from 'next-intl';

export function ChatProjectCards() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getChatProjects(locale);
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects for chat', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, [locale]);

  if (loading) {
    return (
      <div className="flex flex-col gap-3 mt-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-[76px] rounded-lg bg-card border border-border animate-pulse" />
        ))}
      </div>
    );
  }

  if (projects.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 mt-4">
      {projects.map((project) => (
        <ChatProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
