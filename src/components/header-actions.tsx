// Components
import { LocaleSwitcher } from './locale-switcher';
import { ThemeToggle } from './theme-toggle';

export function HeaderActions() {
  return (
    <div className="flex items-center gap-x-3">
      <LocaleSwitcher />
      <ThemeToggle />
    </div>
  );
}
