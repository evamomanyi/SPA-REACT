# ✦ Folio — Portfolio Platform

A modern, responsive single-page application built with **React + Vite** for showcasing creative agency work. Features dynamic project management, real-time search filtering, and an accessible slide-in form for adding new projects.

---

## Features

- **Landing page** with animated marquee and agency stats
- **Project grid** — responsive card layout with accent colours
- **Live search** — debounced text search across titles, descriptions, and tags
- **Category filters** — one-click filter tabs (Branding, UI/UX, Web Design, Print, Campaign)
- **Add Project form** — accessible slide-in modal with full client-side validation
- **Delete projects** — two-step confirmation to prevent accidental removal
- **Context API + useReducer** — global state management without external libraries
- **30 unit tests** — covering context, components, hooks, and user interactions
- **Fully responsive** — mobile navbar with hamburger, fluid grid

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Dev server & bundler |
| Vitest | Test runner |
| React Testing Library | Component testing |
| CSS Custom Properties | Theming & design tokens |
| Google Fonts | Typography (Playfair Display + DM Sans) |

---

## Setup & Usage

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio-platform.git
cd portfolio-platform

# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev
```

### Run tests

```bash
# Run all tests once
npm test

# Watch mode (re-runs on file change)
npm run test:watch
```

### Build for production

```bash
npm run build
# Output in /dist
```

---

## Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── AddProject.jsx
│   ├── SearchBar.jsx
│   ├── ProjectCard.jsx
│   └── ProjectList.jsx
│
├── hooks/
│   └── useProjects.js
│
├── styles/
│   ├── Header.css
│   ├── AddProject.css
│   ├── SearchBar.css
│   ├── ProjectCard.css
│   └── App.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Test Folder Structure

```
src/
│
├── components/
│
├── tests/
│   ├── Header.test.jsx
│   ├── AddProject.test.jsx
│   ├── SearchBar.test.jsx
│   └── App.test.jsx
│
└── setupTests.js
```

---

## State Management

State lives in `ProjectContext` (Context API + `useReducer`):

| State | Type | Description |
|---|---|---|
| `projects` | `Project[]` | All projects (managed by reducer) |
| `searchQuery` | `string` | Current text search value |
| `activeCategory` | `string` | Active category filter tab |
| `filteredProjects` | `Project[]` | Derived — filtered view |

---

## Known Limitations

- **No persistence** — projects reset on page reload (no localStorage or backend)
- **No image upload** — project thumbnails use generated color gradients
- **No routing** — single-page, no individual project detail pages
- **No edit** — existing projects can only be deleted, not edited

---

## Accessibility

- Semantic HTML (`nav`, `main`, `article`, `section`, `footer`)
- ARIA labels on all interactive elements
- `aria-live` for dynamic search result counts
- `aria-pressed` on category toggle buttons
- Keyboard accessible modal (Escape to close, focus trap on open)
- Sufficient colour contrast ratios throughout

---

## License

MIT
