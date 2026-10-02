# Fatima Baig — Portfolio

A responsive, editorial-style personal portfolio built with React, TanStack Start, TypeScript, and Tailwind CSS.

## Local development

Requires a recent Node.js version and either Bun or npm.

```sh
bun install
bun run dev
```

Open the local URL shown in the terminal.

## Production build

```sh
bun run build
bun run preview
```

With npm, use `npm install`, `npm run dev`, and `npm run build` instead.

## Editing portfolio content

The homepage content is in `src/routes/index.tsx`; visual tokens and responsive styling are in `src/styles.css`. Replace the clearly labeled certification and resume placeholders only with verified details and files.

## GitHub Pages

TanStack Start can produce server-rendered output, while GitHub Pages serves static files only. Before deploying there, configure a fully static export/build and set Vite’s base path to the repository name when using a project site (for example `/portfolio/`). Also ensure client-side route fallback behavior is not required. For the default build, use a host that supports TanStack Start’s generated server output.
