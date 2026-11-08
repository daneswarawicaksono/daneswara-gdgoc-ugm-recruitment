# GDGoC UGM Front-End Hacker Assignment

> **Candidate Name:** Daneswara Ramadhana Rafif Wicaksono  
> **Target Community:** Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada  
> **Role:** Front-End Hacker Candidate (2026/2027 Recruitment)  
> **Live Deployment (Vercel):** [https://gdgoc-ugm-recruitment-daneswara.vercel.app](https://gdgoc-ugm-recruitment-daneswara.vercel.app) *(Documented Placeholder)*  
> **Video Walkthrough (Google Drive):** [https://drive.google.com/drive/folders/placeholder-walkthrough-daneswara](https://drive.google.com/drive/folders/placeholder-walkthrough-daneswara) *(Documented Placeholder)*  

---

## 🚀 Project Overview

This web application is built for the **GDGoC UGM Front-End Hacker Assignment** on behalf of candidate **Daneswara Ramadhana Rafif Wicaksono**. The application delivers a high-performance, accessible, and responsive user experience designed to showcase the community's learning tracks, formats, values, and contribution roles.

It dynamically interfaces with the official GDGoC UGM REST API (`https://gdgoc-ugm-api.vercel.app/api`), incorporating server-state caching, resilient error boundaries, animated skeleton screens, multi-attribute filtering, client-side search, interactive quick previews, dynamic routing with pre-rendered static paths, and local storage state persistence.

---

## 🛠️ Tech Stack & Technical Rationale

| Technology | Version | Purpose & Rationale |
|---|---|---|
| **Next.js (App Router)** | `14.2.15` | Modern React framework providing React Server Components (RSC), optimized client hydration, dynamic route metadata, and static site generation (`generateStaticParams`). |
| **React** | `18.3.1` | Concurrent UI rendering, component-level state control, and client-side transitions. |
| **TypeScript (Strict)** | `5.9.3` | Strict compile-time type safety with explicit data contracts mirroring the REST API schema (`ApiResponse<T>`, `TrackItem`, `UnifiedCatalogItem`, etc.). |
| **Tailwind CSS** | `3.4.14` | Custom Google Developer palette tokens (`#4285F4`, `#EA4335`, `#FBBC05`, `#34A853`), dark surface theme, responsive flex/grid layouts, and zero-runtime CSS footprint. |
| **TanStack React Query** | `v5.59.16` | Efficient server-state management with automatic 5-minute stale-while-revalidate caching, request deduplication, and window-refocus controls. |
| **Lucide React** | `0.453.0` | Consistent, accessible, tree-shakeable SVG icon library for visual cues across mobile and desktop. |
| **clsx & tailwind-merge** | Latest | Safe conditional className merging without style specificity conflicts. |

---

## 📐 Architecture & Clean Directory Layout

```
gdgoc-ugm-recruitment/
├── public/                 # Static assets and brand icons
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, Error boundaries)
│   │   ├── tracks/[id]/    # Page 2: Dynamic single-item Track detail view
│   │   │   └── page.tsx    # SSG generation, dynamic metadata & track loader
│   │   ├── error.tsx       # Global Error Boundary fallback with retry
│   │   ├── globals.css     # Tailwind directives and custom shimmer animations
│   │   ├── layout.tsx      # Root HTML shell with Navbar, Footer & QueryProvider
│   │   ├── loading.tsx     # Animated Skeleton loader for route transitions
│   │   ├── not-found.tsx   # Custom 404 state for invalid track parameters
│   │   └── page.tsx        # Page 1: Main Dashboard & Unified Catalog
│   ├── components/
│   │   ├── catalog/        # CatalogContainer, CatalogCard, CatalogFilter, StatsBanner
│   │   ├── detail/         # TrackDetailView, Roadmap steps, FAQ accordions, Application modal
│   │   ├── layout/         # Navbar, Footer, ReactQueryProvider
│   │   └── ui/             # Reusable UI primitives (Badge, Skeleton, ErrorFallback, EmptyState, Pagination)
│   ├── hooks/
│   │   ├── useData.ts      # React Query hooks for tracks, stats, journey, and unified catalog
│   │   └── usePagination.ts# Custom client-side pagination hook with clamped pages & auto-reset
│   ├── services/
│   │   └── api.ts          # Centralized REST API client layer
│   ├── types/
│   │   └── index.ts        # Strict TypeScript data models for API payloads
│   └── utils/
│       └── index.ts        # Helper utilities (cn, color formatting, text truncation)
├── .eslintrc.json          # Next.js Core Web Vitals ESLint configuration
├── next.config.js          # Next.js build configuration & alias mappings
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Custom Google branding and surface colors
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Project manifest & dependencies
```

---

## ✨ Features & User Flows

### 1. Main Dashboard & Unified Catalog (Page 1 — `/`)
- **Community Stats Banner:** Real-time metrics fetched from `/api/stats` (Active members, workshops held, shipped projects, active tracks).
- **Client-Side Real-Time Search:** Instant filtering across title, tagline, description, and technical skill tags.
- **Category Filter Pills:** Switch seamlessly between **All Items**, **Learning Tracks**, **Learning Formats**, **Community Values**, and **Member Roles**, displaying live item count badges for each category.
- **Multi-Attribute Sorting:** Sort catalog items by:
  - Title (A → Z)
  - Title (Z → A)
  - Category Type
  - Skills / Tags Count (High to Low)
- **Custom Pagination:** Clean pagination component configured at 6 items per page with clamped page bounds, range counter ("Showing 1 to 6 of 14 items"), and automatic page reset upon filter/search changes.
- **Interactive Quick View Modals:** Dedicated modal drawer for non-track components (learning formats, values, roles) allowing members to inspect full specifications without leaving the dashboard.
- **Empty State Illustration:** Custom illustration and "Reset All Filters" CTA when zero items match search queries.

### 2. Single-Track Detail View (Page 2 — `/tracks/:id`)
- **Dynamic Route Resolution:** Static pre-rendering (`generateStaticParams`) for `/tracks/research-discovery`, `/tracks/design-creativity`, and `/tracks/development`.
- **Dynamic Metadata & SEO:** Custom OpenGraph tags and page titles dynamically resolved per track.
- **Rich Track Narrative:** Track icon, branding badge, tagline, detailed description, skills matrix, and project expectations.
- **4-Step Learning Journey:** Interactive sequence generated from `/api/journey` (Discover → Practice → Build → Share).
- **Interactive FAQ Accordion:** Filtered FAQs from `/api/faqs` with collapsible panels, category chips, and smooth chevron animation.
- **Interactive Registration Modal:** Full modal application form with student name, UGM email, faculty selector, skill level, and statement of interest, returning an official confirmation ticket (e.g. `GDGOC-DEV-4921`) with timestamp.
- **Local Storage Bookmarking:** Toggle bookmark state saved directly to browser `localStorage`.
- **Share Track URL:** Instant clipboard copy with visual feedback toast.
- **Explore Other Tracks Switcher:** Seamless navigation cards at the bottom linking directly to sibling tracks.
- **Seamless Back-Navigation:** One-click return to catalog dashboard.

### 3. API State Handling & Fallbacks
- **Custom Shimmer Skeletons:** Animated skeleton cards and skeleton detail headers simulating content during network calls.
- **Resilient Error Boundary:** Friendly error fallback screen featuring detailed diagnostics and an interactive **"Retry Request"** button.
- **404 Not Found Page:** Dedicated not-found view when an invalid track route parameter is supplied.

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js 18.x or 20.x+
- npm, yarn, or pnpm

### 1. Clone & Navigate
```bash
git clone https://github.com/daneswara-wicaksono/gdgoc-ugm-recruitment.git
cd gdgoc-ugm-recruitment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Linting
```bash
npm run lint
```

### 5. Production Build & Start
```bash
npm run build
npm run start
```

---

## 📡 API Consumption Reference

All requests point to the official GDGoC UGM API (`https://gdgoc-ugm-api.vercel.app/api`):
- `GET /api/tracks` & `GET /api/tracks/:id` — Track curricula and skill profiles.
- `GET /api/formats` — Learning formats (study groups, circles, workshops).
- `GET /api/values` — Community culture and core principles.
- `GET /api/roles` — Contribution and membership tiers.
- `GET /api/journey` — 4-stage development roadmap.
- `GET /api/faqs` — Frequently asked questions.
- `GET /api/stats` — Community metrics.
- `GET /api/inquiry-categories` — Contact and inquiry subjects.

---

## 👤 Candidate Information
- **Name:** Daneswara Ramadhana Rafif Wicaksono
- **Institution:** Universitas Gadjah Mada (UGM)
- **Role:** GDGoC Front-End Hacker Candidate (2026/2027)
