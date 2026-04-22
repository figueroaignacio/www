'use client';

import { usePathname } from '@/i18n/navigation';

export function TerminalPrompt() {
  const pathname = usePathname();

  const displayPath = pathname === '/' ? '~' : `~${pathname}`;

  return (
    <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 z-50 font-mono text-xs pointer-events-none opacity-70 hidden md:block">
      <span className="text-green-500">visitor@ignaciofigueroa</span>
      <span className="text-foreground">:</span>
      <span className="text-blue-500">{displayPath}</span>
      <span className="text-foreground">$ </span>
      <span className="animate-pulse text-foreground">_</span>
    </div>
  );
}
