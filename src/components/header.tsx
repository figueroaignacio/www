import { MobileMenu } from './mobile-menu';
import { NavigationBar } from './navigation-bar';

export function Header() {
  return (
    <header>
      <NavigationBar />
      <MobileMenu />
    </header>
  );
}
