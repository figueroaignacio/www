# Design System: Ignacio Figueroa Portfolio

## 1. Visual Theme & Atmosphere

Airy, minimalist, and content-focused aesthetic. The design embraces generous whitespace with a restrained color palette that prioritizes readability. Dark mode shifts the palette to deep blacks with subtle blue undertones, creating a sophisticated low-light experience. The overall feel is professional yet approachable—suitable for a developer portfolio with focus on clean UI and accessibility.

## 2. Color Palette & Roles

### Light Mode

| Descriptive Name | Hex Code  | Functional Role                        |
| ---------------- | --------- | -------------------------------------- |
| Crisp White      | `#ffffff` | Primary background, cards, inputs      |
| Charcoal         | `#1f1f1f` | Primary text, borders on cards         |
| Google Blue      | `#1a73e8` | Primary actions, links, accents        |
| Cloud White      | `#e9eef6` | Secondary backgrounds, selected states |
| Frost            | `#f0f4f9` | Muted backgrounds, subtle dividers     |
| Slate Gray       | `#444746` | Secondary/muted text                   |
| Mist             | `#dde3ea` | Accent backgrounds, hover states       |
| Alert Red        | `#d93025` | Destructive actions, errors            |

### Dark Mode

| Descriptive Name | Hex Code  | Functional Role                              |
| ---------------- | --------- | -------------------------------------------- |
| Deep Black       | `#000000` | Primary background                           |
| Pale Gray        | `#e3e3e3` | Primary text in dark mode                    |
| Charcoal         | `#1e1f20` | Cards, popovers in dark mode                 |
| Soft Blue        | `#8ab4f8` | Primary actions in dark mode (high contrast) |
| Dark Slate       | `#2d2f31` | Secondary backgrounds                        |
| Void             | `#111111` | Muted backgrounds, input fields              |
| Dim Gray         | `#969696` | Muted/secondary text                         |

### Semantic Colors

| Name           | Hex/Value             | Role                           |
| -------------- | --------------------- | ------------------------------ |
| `--border`     | `#e3e3e3` / `#1b1b1c` | Subtle dividers, input borders |
| `--ring`       | `#0b57d0` / `#8ab4f8` | Focus ring for accessibility   |
| `--grid-color` | `rgba(0, 0, 0, 0.02)` | Subtle background grid pattern |

## 3. Typography Rules

- **Font Stack**: Uses CSS custom properties `--font-sans` (body) and `--font-heading` (headers)
- **Body Text**: Clean sans-serif, high legibility
- **Headings**: Bold weight, distinct from body for hierarchy
- **Code Blocks**: Monospace font (`font-mono`), dark background (`#2a2c33`), white text
- **Line Height**: `leading-7` (1.75rem) for comfortable reading
- **Scroll**: Smooth scrolling enabled globally

## 4. Component Stylings

### Buttons

- **Shape**: Rounded corners (`rounded-lg`)
- **Primary Button**: Solid foreground on background, hover lightens border
- **Outline Button**: Transparent with border, hover fills card background
- **Ghost Button**: No border, hover reveals border and card background
- **Link Button**: Underlined, text-sm size
- **Padding**: `px-5 py-2.5` (horizontal, vertical)
- **Transition**: `transition-colors` for color-only transitions

### Cards/Containers

- **Shape**: Rounded corners (`rounded-lg`)
- **Outlined Card**: Transparent background, border in `--border` color
- **Solid Card**: White/dark background, border in foreground color
- **Padding**: `p-6` (1.5rem)

### Inputs

- **Background**: White (light) / `#111111` (dark)
- **Border**: Subtle `--border` color
- **Focus Ring**: Primary ring color (`#0b57d0` or `#8ab4f8`)

### Prose (Content Areas)

- **Paragraph Spacing**: `mb-3 leading-7`
- **Headers**: `pb-3 mt-6 border-b border-border mb-3`
- **Blockquote**: Left border accent (`border-l-4`), primary color, italic
- **Lists**: `ml-5` indent, proper bullet/number spacing

## 5. Layout Principles

- **Container**: `max-w-3xl mx-auto p-4 w-full` — centered, readable width
- **Border Radius**: Generous rounding (`--radius: 1.5rem`) creates pill-like softness
  - `radius-sm`: 0.75rem smaller
  - `radius-md`: 0.5rem smaller
  - `radius-lg`: base 1.5rem
  - `radius-xl`: 2rem
  - `radius-2xl`: 2.5rem
- **Scrollbar**: Thin (5px), rounded, subtle styling
- **Grid Pattern**: Ultra-subtle background (`rgba(0, 0, 0, 0.02)`)

## 6. Animations

- **Custom Animation**: `animate-fade-in-up` — smooth entrance from below
- **Timing**: Cubic-bezier easing (`0.16, 1, 0.3, 1`) for natural motion
- **Duration**: 700ms
- **Delays**: `delay-150` (150ms), `delay-300` (300ms) for staggered reveals
- **Blink**: Cursor blink animation for AI terminal effect

## 7. Accessibility Considerations

- Focus rings use `--ring` color for visible keyboard navigation
- Smooth scroll for preference
- Dark mode maintains sufficient contrast ratios
- Semantic HTML structure (proper heading hierarchy)
