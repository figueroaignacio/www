'use client';

import clsx from 'clsx';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import styles from './dropdown-menu.module.css';

type DropdownChildProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

function DropdownMenu({ children, className }: { children: React.ReactNode; className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = event.target as HTMLElement;
      if (menu && !menu.closest(`.${styles.dropdownMenu}`)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const items = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<DropdownChildProps>, {
          isOpen,
          toggleMenu,
          closeMenu,
        })
      : child,
  );

  return <div className={clsx(styles.dropdownMenu, className)}>{items}</div>;
}

function DropdownMenuTrigger({
  children,
  onClick,
  toggleMenu,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  toggleMenu?: () => void;
  className?: string;
  isOpen?: boolean;
}) {
  return (
    <Button
      onClick={() => {
        toggleMenu?.();
        onClick?.();
      }}
      aria-expanded={isOpen}
      aria-controls="dropdown-menu-content"
      variant="ghost"
      size="sm"
      className={className}
    >
      {children}
      <svg
        className={clsx(styles.triggerIcon, isOpen && styles.triggerIconOpen)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.292 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
}

function DropdownMenuContent({
  isOpen,
  children,
  className,
}: {
  isOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const timeout = setTimeout(() => setShouldRender(false), 100);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      id="dropdown-menu-content"
      className={clsx(styles.menuContent, visible ? styles.menuEnter : styles.menuExit, className)}
      role="menu"
      aria-hidden={!isOpen}
    >
      <div className={styles.menuContentInner}>{children}</div>
    </div>
  );
}

function DropdownMenuItem({
  children,
  onClick,
  closeMenu,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  closeMenu?: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={() => {
        onClick?.();
        closeMenu?.();
      }}
      className={clsx(styles.menuItem, className)}
      role="menuitem"
    >
      {children}
    </div>
  );
}

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger };
