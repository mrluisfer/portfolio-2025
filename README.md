# Portfolio 2025

**Portfolio 2025** is a modern personal portfolio website built with **Astro** and **React**.  
It showcases professional experience, skills, projects, and personal interests through an **interactive, animated user interface**.

The project combines **static site generation** with **selective client-side hydration**, leveraging Astro’s **island architecture** for high performance and React for dynamic interactivity.

---

## 📌 Purpose & Scope

This repository provides:

- A performant and interactive portfolio platform.
- A modular codebase for showcasing professional and personal work.
- A foundation for integrating external APIs (GitHub, Spotify, etc.).
- A modern developer workflow with strict tooling and formatting standards.

---

## 🏛 Technology Stack & Architecture

Portfolio 2025 uses a **hybrid architecture**:

- **Static content** → Delivered via Astro for speed and SEO.
- **Hydrated components** → React powers interactivity where needed.

### Core Technologies

![Core Structure](/public/core-structure.png)

| Category          | Technologies                                 | Purpose                                    |
| ----------------- | -------------------------------------------- | ------------------------------------------ |
| **Framework**     | `astro`, `@astrojs/react`, `@astrojs/vercel` | Core framework and deployment integrations |
| **Frontend**      | `react`, `react-dom`, `typescript`           | Component development & type safety        |
| **Styling**       | `tailwindcss`, `sass`, `motion`              | Styling system and animations              |
| **External APIs** | `octokit`, `spotify-api-kit`                 | GitHub repositories & Spotify integration  |
| **Build Tools**   | `vite`, `pnpm`, `prettier`, `@biomejs/biome` | Development workflow & tooling             |

---

## 📂 Application Structure

The portfolio follows a **section-based architecture**:

- **`Layout.astro`** → Provides base HTML structure, global CSS, and navigation transitions.
- **`index.astro`** → Main orchestrator that imports and renders sections with selective hydration (`client:only="react"`).
- **Section Components** → Each portfolio section is implemented as a dedicated React component.

```bash
src/
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── constants/
│   └── navigation-names.ts
├── components/
│   ├── Hero/
│   ├── Skills/
│   ├── Projects/
│   ├── Terminal/
│   └── Navigation/
└── assets/

```

---

## 🧭 Navigation & Content Sections

- Navigation is driven by centralized constants in **`navigation-names.ts`**.
- Each navigation item maps directly to a **React component** handling its section content and interactions.
- This ensures **consistency** and **easy extensibility** when adding or modifying sections.

---

## 🛠 Development Environment & Tooling

The project enforces **strict tooling and workflows**:

### Package Manager

- Uses **pnpm** with a preinstall hook to enforce consistency.

### Scripts

| Script           | Command                               | Purpose                        |
| ---------------- | ------------------------------------- | ------------------------------ |
| **dev**          | `astro dev`                           | Start local development server |
| **build**        | `astro build`                         | Build for production           |
| **preview**      | `astro preview`                       | Preview local production build |
| **format**       | `prettier --write .`                  | Format code with Prettier      |
| **biome:format** | `npx @biomejs/biome format --write .` | Format code with Biome         |

---

## 🚀 Performance & Optimization Strategy

Portfolio 2025 maximizes performance with **Astro Islands**:

- **Static Content** → Page structure, HTML scaffolding, CSS assets.
- **Hydrated Components** → Interactive UI sections (`Hero`, `Skills`, `Terminal`, `Navigation`).
- **Mixed Rendering** → Some components (e.g., `Projects`) remain server-rendered, others are selectively hydrated.

This ensures **fast load times** while still providing **rich interactivity**.

---

## 🌐 External Integrations

The portfolio connects to external services for real-time, dynamic data:

- **GitHub Integration** → Powered by `@octokit/core` and related packages to display repositories and contributions.
- **Spotify Integration** → Uses `spotify-api-kit` to display currently playing music.
- **Deployment** → Configured for **Vercel** with `@astrojs/vercel` adapter.

---

## 📌 Conclusion

Portfolio 2025 establishes a **high-performance, interactive personal portfolio** with a clean architecture and modern development practices.

For deeper technical insights, refer to:

- [Architecture & Setup]
- [Core Application Framework]
- [UI Component Systems]
- [External Integrations]
- [Styling & Assets]
