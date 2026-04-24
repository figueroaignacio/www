'use client';

import { Dialog } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/toast';
import { AssistantAvatar } from '@/features/assistant/components/assistant-avatar';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

type CommandType = { id: string; label: string; desc: string; path: string };

const PromptPrefix = ({ path, className }: { path: string; className?: string }) => (
  <span className={className}>
    <span className="text-emerald-600 dark:text-green-500">visitor</span>
    <span className="text-muted-foreground">@</span>
    <span className="text-indigo-600 dark:text-cyan-400">ignaciofigueroa</span>
    <span className="text-foreground">:</span>
    <span className="text-amber-600 dark:text-yellow-500">{path}</span>
  </span>
);

export function TerminalPrompt() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('components.terminalPrompt');
  const commands = t.raw('commands') as CommandType[];
  const { toast } = useToast();

  const [time, setTime] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const displayPath = pathname === '/' ? '~/home' : `~${pathname}`;

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredCommands = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase()),
  );

  const executeCommand = (cmd: CommandType) => {
    setOpen(false);
    setSearch('');

    if (cmd.path === 'mailto') {
      window.location.href = 'mailto:figueroaignacio@gmail.com';
      return;
    }

    if (cmd.path === 'sudo') {
      toast({
        title: (
          <div className="flex items-center gap-3">
            <AssistantAvatar size="md" />
            <span>{t('permissionDenied')}</span>
          </div>
        ),
        description: t('sudoMessage'),
        variant: 'error',
        duration: 5000,
      });
      return;
    }

    router.push(cmd.path);
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-2 left-2 md:bottom-4 md:left-4 z-40 hidden max-w-lg cursor-pointer flex-col space-y-1 font-mono text-xs md:flex hover:opacity-80 transition-opacity"
      >
        <div className="text-muted-foreground min-h-4">{time ? `[${time}]` : ''}</div>
        <div>
          <PromptPrefix path={displayPath} />
          <span className="text-foreground ml-1">$</span>
          <span className="animate-pulse text-foreground ml-1">_</span>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog.Content className="max-w-2xl bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-[#333] p-0 font-mono text-sm overflow-hidden rounded-sm">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_50%,transparent_50%)] dark:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] z-10 opacity-50 dark:opacity-30 mix-blend-overlay" />

          <div className="flex items-center p-4 border-b border-zinc-100 dark:border-white/10 relative z-20 bg-zinc-50/50 dark:bg-black/50">
            <PromptPrefix path={displayPath} className="hidden sm:inline whitespace-nowrap mr-2" />
            <span className="text-amber-600 dark:text-yellow-500 sm:hidden whitespace-nowrap mr-2">
              {displayPath}
            </span>
            <span className="text-foreground mr-2">$</span>

            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && filteredCommands.length > 0) {
                  executeCommand(filteredCommands[0]);
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50 caret-foreground"
              placeholder={t('placeholder')}
            />
          </div>

          <div className="p-2 max-h-[60vh] overflow-y-auto relative z-20">
            {filteredCommands.length === 0 ? (
              <div className="text-red-500 dark:text-red-400/80 p-4 text-center text-xs">
                {t('notFound')} {search}
              </div>
            ) : (
              <ul className="space-y-1">
                {filteredCommands.map((cmd) => (
                  <li
                    key={cmd.id}
                    className="flex justify-between items-center p-3 hover:bg-zinc-100 dark:hover:bg-white/5 cursor-pointer rounded-md text-foreground transition-colors group"
                    onClick={() => executeCommand(cmd)}
                  >
                    <span className="text-indigo-600 dark:text-blue-400 font-semibold group-hover:text-indigo-500 dark:group-hover:text-blue-300 transition-colors">
                      {cmd.label}
                    </span>
                    <span className="text-muted-foreground text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                      {cmd.desc}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Dialog.Content>
      </Dialog>
    </>
  );
}
