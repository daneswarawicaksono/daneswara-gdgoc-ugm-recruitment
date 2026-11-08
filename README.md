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
