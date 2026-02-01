import { Link } from '@/i18n/navigation';
import { BookOpen, FolderGit2, User } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface QuickLink {
  title: string;
  description: string;
  href: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  '/projects': FolderGit2,
  '/blog': BookOpen,
  '/about': User,
};

export function QuickLinks() {
  const t = useTranslations('sections.home');
  const quickLinks: QuickLink[] = t.raw('quickLinks');

  return (
    <section className="grid sm:grid-cols-3 gap-4">
      {quickLinks.map((item) => (
        <QuickLink
          key={item.href}
          title={item.title}
          description={item.description}
          href={item.href}
        />
      ))}
    </section>
  );
}

function QuickLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  const Icon = iconMap[href] || FolderGit2;

  return (
    <Link
      href={href}
      className="group block p-6 bg-card rounded-lg border border-border hover:border-muted-foreground/50 transition-colors space-y-4"
    >
      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  );
}
