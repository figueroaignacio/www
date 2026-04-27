'use client';

import { useChatProjects } from '../../hooks/use-chat-data';
import { ChatProjectCard } from './chat-project-card';

export function ChatProjectCards() {
  const { data: projects, isLoading: loading } = useChatProjects();

  if (loading) {
    return (
      <div className="flex flex-col gap-3 mt-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-[76px] rounded-lg bg-card border border-border animate-pulse" />
        ))}
      </div>
    );
  }

  if (!projects || projects.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 mt-4">
      {projects.map((project) => (
        <ChatProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
