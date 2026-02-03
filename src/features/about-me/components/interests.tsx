// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Badge } from '@/components/ui/badge';
import {
  Blocks,
  Bot,
  FlaskConical,
  Globe,
  LayoutTemplate,
  LucideIcon,
  Palette,
  ScanFace,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';

type InterestConfig = {
  key: string;
  icon: LucideIcon;
};

const INTERESTS_CONFIG: InterestConfig[] = [
  { key: 'frontend', icon: LayoutTemplate },
  { key: 'backend', icon: Server },
  { key: 'ai', icon: Bot },
  { key: 'prompts', icon: Terminal },
  { key: 'arch', icon: Blocks },
  { key: 'clean', icon: ShieldCheck },
  { key: 'ui', icon: Palette },
  { key: 'a11y', icon: ScanFace },
  { key: 'perf', icon: Zap },
  { key: 'qa', icon: FlaskConical },
  { key: 'devops', icon: Workflow },
  { key: 'opensource', icon: Globe },
];

export function Interests() {
  const t = useTranslations('sections.interests.items');
  const tSection = useTranslations('sections.interests');

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium">{tSection('title')}</h2>
        <p className="text-muted-foreground">{tSection('description')}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {INTERESTS_CONFIG.map(({ key, icon: Icon }) => (
          <Badge key={key} variant="outline" className="space-x-3 py-2">
            <Icon className="w-3.5 h-3.5" />
            <span>{t(key)}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}
