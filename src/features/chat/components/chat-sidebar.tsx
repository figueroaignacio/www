'use client';

import { GitHubIcon } from '@/components/tech-icons';
import { Link } from '@/i18n/navigation';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { BookOpen, Download, FolderGit2, HomeIcon, Mail, SquarePen, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

interface ChatSidebarProps {
  onNewChat?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function ChatSidebar({ onNewChat, isOpen, onClose }: ChatSidebarProps) {
  const t = useTranslations('components.chat.sidebar');
  const cvT = useTranslations('components.ctaCv');

  const links = useMemo(
    () => [
      { icon: HomeIcon, label: t('home'), href: '/', external: false },
      { icon: FolderGit2, label: t('projects'), href: '/projects', external: false },
      { icon: BookOpen, label: t('blog'), href: '/blog', external: false },
      { icon: Download, label: t('cv'), href: cvT('url'), external: true },
    ],
    [t, cvT],
  );

  const contactLinks = useMemo(
    () => [
      { icon: Mail, label: 'Email', href: 'mailto:ignaciofigueroadev@gmail.com', external: true },
      {
        icon: LinkedInLogoIcon,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/figueroa-ignacio',
        external: true,
      },
      {
        icon: GitHubIcon,
        label: 'GitHub',
        href: 'https://github.com/figueroaignacio',
        external: true,
      },
    ],
    [],
  );

  const sidebarContent = useMemo(
    () => (
      <div className="flex flex-col h-full p-4 bg-card  w-[260px] shrink-0 rounded-lg overflow-hidden">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => {
              onNewChat?.();
              onClose?.();
            }}
            className="flex-1 flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-accent/80 transition-all duration-200 group border border-transparent hover:border-border/50"
          >
            <span className="text-[14px] font-semibold tracking-tight">N-bot</span>
            <SquarePen className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden ml-2 p-2 rounded-lg hover:bg-accent text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <nav className="flex-1 space-y-6">
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
              {t('explore')}
            </p>
            <ul className="space-y-1">
              {links.map((link, index) => {
                const Icon = link.icon;
                const item = (
                  <li key={link.href}>
                    <span
                      onClick={() => onClose?.()}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 cursor-pointer group font-medium"
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </span>
                  </li>
                );

                return link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    {item}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="block no-underline">
                    {item}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
              {t('contact')}
            </p>
            <ul className="space-y-1">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                const item = (
                  <li key={link.href}>
                    <span
                      onClick={() => onClose?.()}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 cursor-pointer group font-medium"
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </span>
                  </li>
                );

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    {item}
                  </a>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    ),
    [links, onClose, onNewChat, t],
  );

  return (
    <>
      <aside className="hidden lg:flex flex-col h-screen py-4 pl-4 pr-1 shrink-0">
        {sidebarContent}
      </aside>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 lg:hidden p-4"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
