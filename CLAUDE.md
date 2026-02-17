# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for TheTestingAutomationAcademy — a software testing training platform offering LIVE classes in manual testing, API testing, and automation testing. Built as a single-page application with client-side routing.

## Commands

- **Dev server**: `npm run dev` (Vite, default port 5173)
- **Build**: `npm run build` (runs `tsc -b && vite build`, output to `dist/`)
- **Lint**: `npm run lint` (ESLint with TypeScript + React hooks rules)
- **Preview production build**: `npm run preview`

No test runner is configured.

## Architecture

### Tech Stack
- React 19 + TypeScript + Vite 7
- Tailwind CSS 3 with shadcn/ui (New York style, `slate` base color)
- react-router-dom v7 with `HashRouter` (hash-based routing for static hosting)
- All pages are lazy-loaded via `React.lazy()` in `App.tsx`

### Path Alias
`@/` maps to `./src/` — configured in both `tsconfig.json` and `vite.config.ts`.

### Key Directories
- `src/pages/` — Route-level page components (Home, Courses, CourseDetail, Blog, BlogPost, Contact, etc.)
- `src/components/ui/` — shadcn/ui primitives (50+ components, managed via `npx shadcn-ui` per `components.json`)
- `src/components/layout/` — `Navbar.tsx` and `Footer.tsx`, rendered globally in `App.tsx`
- `src/data/courses.ts` — Course catalog with typed `Course` and `Lesson` interfaces; all course data is hardcoded here
- `src/mocks/react-router-dom.tsx` — Custom minimal router mock (not used in production; `main.tsx` uses the real `react-router-dom`)
- `src/lib/utils.ts` — Single `cn()` utility combining `clsx` + `tailwind-merge`
- `src/hooks/use-mobile.ts` — Mobile breakpoint detection hook

### Routing
Routes are defined in `App.tsx`. Notable dynamic routes:
- `/courses/:slug` — `CourseDetail` page, slug matches `Course.slug` from `src/data/courses.ts`
- `/blog/:id` — `BlogPost` page

### Design System
`Design.md` contains the full design specification including brand colors (Gold `#FFD700`, Dark Blue `#001F3F`), typography (Poppins for headings, Open Sans for body), animation choreography per section, and responsive breakpoints. Reference this when making visual changes.

### Styling Conventions
- Tailwind utility classes directly in JSX; use `cn()` from `@/lib/utils` for conditional classes
- CSS variables for theming defined in `src/index.css` (HSL format for shadcn compatibility)
- Brand-specific colors are applied inline (e.g., `bg-[#FFD700]`, `text-[#001F3F]`) rather than via the Tailwind theme
