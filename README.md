![Ignacio Figueroa Portfolio](https://ignaciofigueroa.vercel.app/en/opengraph-image)

## A modern, fast, and fully custom portfolio built with Next.js, Tailwind CSS, Payload CMS, and PostgreSQL.

It showcases my work, articles, projects, and includes an AI-powered assistant to help visitors explore my content in an interactive way.

This portfolio reflects my focus on clean UI, high performance, accessibility, and a great developer experience.

## Tech Stack

This project uses a modern full-stack setup:

### Frontend

- Next.js
- React
- Tailwind CSS
- Motion (animations)

### Backend & CMS

- Payload CMS
- PostgreSQL
- Vercel Postgres adapter
- Better Auth with GitHub OAuth provider

### AI

- Vercel AI SDK
- Groq – ultra-fast inference
- Custom AI chatbot

### Tooling

- ESLint, Prettier
- pnpm workspace setup

## 🏗️ Project Structure

The project follows a standard Next.js 16 (App Router) structure, integrated with Payload CMS 3.0.

```
.
├── public/              # Static assets (images, fonts, etc.)
└── src/
    ├── app/             # Next.js App Router pages
    │   ├── [locale]/    # Internationalized routes
    │   ├── (payload)/   # Payload admin routes
    │   └── api/         # API routes
    ├── collections/     # Payload CMS collections definitions
    ├── components/      # Global React components
    │   └── ui/          # Reusable UI primitives (shadcn/ui style)
    ├── features/        # Feature-specific logic and components
    ├── hooks/           # Custom React hooks
    ├── i18n/            # Internationalization configuration
    ├── lib/             # Shared utilities, DB client, and auth
    ├── locales/         # Translation dictionaries (JSON)
    ├── migrations/      # Database migrations
    ├── payload.config.ts # Payload CMS configuration
    └── payload-types.ts # Auto-generated CMS types
```

## AI Assistant

This portfolio includes a fully integrated AI assistant to help visitors explore my content in an interactive way.

### Powered by Vercel AI SDK and Groq, AI Assistant provides:

- Answers about me, my background, and my work
- Help navigating the website
- Insights about the technologies I use
- Discussions and summaries of my blog posts
- Context-aware guidance about my projects and stack

### AI Assistant shows how real-world AI features can be integrated into a modern UI using:

- Next.js App Router
- Groq models
- Framer Motion animations
- Clean, minimal UI with Tailwind

It is part personal assistant, part tech demo, and a fun nod to my name:

## 🧩 Site Content & Pages

### About Me

A personal overview of who I am, my background, my experience, and my philosophy as a web developer.

### Blog

Long-form writing about:

- Programming
- Web development
- Technology
- Opinions on frontend, tooling, and modern stacks
- Comments system

### Projects

A curated list of the projects I've worked on, with descriptions, tech stacks, and case studies.
Managed through Payload CMS.

### Stack

A breakdown of the technologies I use daily:
React • Next.js • Tailwind • Payload • Postgres • Groq SDK • TypeScript • Better Auth + GitHub OAuth Provider.

Almost all content is dynamically loaded from Payload CMS + PostgreSQL.

## 💬 Contact

Feel free to reach out:

- Email: figueroaignaciodev@gmail.com
- LinkedIn: https://www.linkedin.com/in/figueroa-ignacio
- GitHub: https://github.com/figueroaignacio
