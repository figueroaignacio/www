'use client';

import { Link } from '@/i18n/navigation';
import { BookOpen, Download, FolderGit2, Mail, SquarePen, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';

interface ChatSidebarProps {
  onNewChat?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function ChatSidebar({ onNewChat, isOpen, onClose }: ChatSidebarProps) {
  const t = useTranslations('components.chat.sidebar');
  const cvT = useTranslations('components.ctaCv');

  const links = [
    { icon: FolderGit2, label: t('projects'), href: '/projects', external: false },
    { icon: BookOpen, label: t('blog'), href: '/blog', external: false },
    { icon: Download, label: t('cv'), href: cvT('url'), external: true },
    { icon: Mail, label: t('contact'), href: '/about-me', external: false },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full p-4 bg-card/60 backdrop-blur-xl border border-border/50 w-[260px] shrink-0 rounded-lg overflow-hidden">
      <div className="mb-6 flex items-center justify-between">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            onNewChat?.();
            onClose?.();
          }}
          className="flex-1 flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-accent/80 transition-all duration-200 group border border-transparent hover:border-border/50 shadow-sm hover:shadow-none"
        >
          <span className="text-[14px] font-semibold tracking-tight">N-bot</span>
          <SquarePen className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.button>
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
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span
                    onClick={() => onClose?.()}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 cursor-pointer group font-medium"
                  >
                    <Icon className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </span>
                </motion.li>
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
      </nav>
    </div>
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
