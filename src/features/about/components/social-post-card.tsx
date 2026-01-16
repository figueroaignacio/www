import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';

interface SocialPostCardProps {
  children: React.ReactNode;
}

export function SocialPostCard({ children }: SocialPostCardProps) {
  const githubUsername = 'figueroaignacio';
  const avatarUrl = `https://github.com/${githubUsername}.png`;

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={avatarUrl || '/placeholder.svg'}
              alt="Ignacio Figueroa"
              className="w-9 h-9 rounded-full ring-1 ring-primary"
              loading="eager"
              width={36}
              height={36}
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-foreground text-sm font-semibold">figueroaignacio</span>
            </div>
            <span className="text-muted-foreground text-xs">Fullstack Developer</span>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6">
        <p className="text-foreground/90 leading-relaxed text-sm">{children}</p>
      </div>
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-2">
          <span className="text-xs text-muted-foreground">hace 2 horas</span>
        </div>
      </div>
    </div>
  );
}
