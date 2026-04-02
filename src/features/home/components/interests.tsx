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
import { useTranslations } from 'next-intl';

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
    <section className="space-y-6" aria-labelledby="interests-title">
      <div className="space-y-2">
        <h2 id="interests-title" className="text-lg font-medium">{tSection('title')}</h2>
        <p className="text-sm text-muted-foreground mt-1">{tSection('description')}</p>
      </div>
      <ul className="flex flex-wrap gap-2" role="list">
        {INTERESTS_CONFIG.map(({ key, icon: Icon }) => (
          <li key={key} role="listitem">
            <Badge variant="outline" className="space-x-3 py-2">
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t(key)}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
