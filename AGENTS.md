# AGENTS.md

## Commands

```bash
pnpm dev       # Start dev server (http://localhost:3000)
pnpm build     # Production build
pnpm lint       # ESLint
pnpm format     # Prettier write
pnpm payload generate:types  # Regenerate Payload CMS types
pnpm devsafe   # Clean .next and restart dev
```

Note: All node commands require `NODE_OPTIONS=--no-deprecation` (set automatically in scripts).

## Architecture

- **Locale routing**: `[locale]/` route segment — all public pages under `src/app/[locale]/(main)/`
- **Payload admin**: `/admin` via `(payload)` route group
- **Collections**: `src/collections/*.ts` — maps to PostgreSQL tables
- **Components**: `src/components/ui/` for primitives, `src/components/` for domain components
- **Features**: `src/features/` for feature-specific logic

## Tech Stack

- Next.js 16 (App Router), React 19, Tailwind CSS 4
- Payload CMS 3.0 + Vercel Postgres adapter
- i18n via next-intl (`src/i18n/`)
- Strict TypeScript (`strict: true` in tsconfig)

## Dev Notes

- Requires `.env` with `POSTGRES_URL`, `PAYLOAD_SECRET`, `GROQ_API_KEY`
- Use `@payload-config` import alias for config file
- Use `@/*` alias for `src/*`
- Migrations in `src/migrations/`

## Git/Workflow

- Husky pre-commit hooks active
- commitlint uses Conventional Commits format
- lint-staged runs ESLint fix + Prettier write on staged files
