# AGENTS.md - Developer Guidelines

This document provides guidelines for agents working on this codebase.

## Project Overview

This is a Next.js + Payload CMS portfolio website with PostgreSQL. It uses:

- Next.js 16 (App Router)
- Payload CMS 3.0
- Tailwind CSS 4
- TypeScript (strict mode)
- Motion (Framer Motion)
- Better Auth

---

## Commands

### Development

```bash
pnpm dev         # Start dev server
pnpm devsafe     # Clean restart (removes .next cache)
pnpm start       # Production server
```

### Building

```bash
pnpm build       # Next.js production build
```

### Linting & Formatting

```bash
pnpm lint        # ESLint
pnpm format      # Prettier (write mode)
```

### Testing

```bash
pnpm vitest run              # Run all unit tests
pnpm vitest run <file>       # Run single test file
pnpm vitest --watch          # Watch mode
```

Note: Playwright is installed but not configured. No E2E tests currently exist.

### Payload CMS

```bash
pnpm payload generate:types  # Generate TypeScript types
pnpm payload generate:importmap
```

---

## Code Style

### Formatting (Prettier)

- Single quotes
- Trailing commas: all
- Print width: 100
- Semicolons: yes

### TypeScript

- Strict mode enabled
- Use explicit types for function parameters and return types
- Use `type` for unions/interfaces, `interface` for object shapes

### Imports

- Use `@/` path alias (configured in tsconfig.json)
- Group imports: external → internal → relative
- Use `import { x } from 'module'` (named imports preferred)

```typescript
// Good
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
```

### Components

#### Client Components

Add `'use client'` at the very top of the file.

```typescript
'use client';

import { useState } from 'react';
```

#### Using forwardRef

Use `forwardRef` for components that need to accept refs:

```typescript
const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={className} {...props} />;
  },
);
MyComponent.displayName = 'MyComponent';
```

#### Component Variants

Use `cva` (class-variance-authority) for variant components:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('base classes', {
  variants: {
    variant: { default: '...', destructive: '...' },
    size: { default: '...', sm: '...' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

type ButtonProps = VariantProps<typeof buttonVariants> & { ... };
```

### Styling

- Use Tailwind CSS for all styling
- Use `cn()` utility from `@/lib/cn` for class merging
- Use design tokens (colors, spacing) from Tailwind

```typescript
import { cn } from '@/lib/cn';

<div className={cn('base classes', condition && 'conditional-class', className)} />
```

### Error Handling

- Use try/catch with async operations
- Return proper error types
- Never expose secrets in error messages

### Naming Conventions

- Components: PascalCase (`Button`, `HeaderActions`)
- Hooks: camelCase with `use` prefix (`useMounted`, `useTheme`)
- Utilities: camelCase (`formatDate`, `cn`)
- Files: kebab-case (`theme-toggle.tsx`, `auth-client.ts`)

### Exports

- Use named exports for components and utilities
- Export types separately when needed

```typescript
export { Button, buttonVariants };
export type { ButtonProps };
```

---

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── [locale]/        # Internationalized routes
│   ├── (payload)/      # Payload admin routes
│   └── api/            # API routes
├── components/          # React components
│   └── ui/             # Reusable UI components
├── collections/        # Payload CMS collections
├── features/           # Feature-specific code
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
├── locales/            # i18n translation files
└── payload.config.ts  # Payload CMS configuration
```

---

## Path Aliases

- `@/*` → `src/*`
- `@payload-config` → `src/payload.config.ts`

---

## Common Patterns

### Server vs Client Components

- Default to server components
- Add `'use client'` only when needed (hooks, event handlers, browser APIs)

### Internationalization

- Use `next-intl` for i18n
- Routes under `[locale]` directory
- Translation files in `src/locales/`

### Database

- Use `@neondatabase/serverless` for PostgreSQL
- Database client: `src/lib/db.ts`

### Authentication

- Use Better Auth with GitHub OAuth
- Auth utilities: `src/lib/auth.ts` (server), `src/lib/auth-client.ts` (client)
