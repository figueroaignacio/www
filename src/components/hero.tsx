// Components
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ description, title }: HeroProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{title}</h1>
        <div className="flex gap-x-3">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
