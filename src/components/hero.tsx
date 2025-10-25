// Components
import { AnimateIn } from '@/components/animate-in';
import { Contact } from './contact';
import { LocaleSwitcher } from './locale-switcher';
import { NavigationBar } from './navigation-bar';
import { ThemeToggle } from './theme-toggle';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ description, title }: HeroProps) {
  return (
    <div className="space-y-3">
      <AnimateIn variant="fadeUp" delay={0.1}>
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{title}</h1>
          <div className="flex gap-x-3">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </AnimateIn>
      <AnimateIn variant="fadeUp" delay={0.2}>
        <p className="text-sm text-muted-foreground">{description}</p>
      </AnimateIn>
      <AnimateIn variant="fadeUp" delay={0.3}>
        <Contact />
      </AnimateIn>
      <NavigationBar />
    </div>
  );
}
