# Portfolio (React + Vite)

This is a personal portfolio site built with React, Vite, and Tailwind CSS. It is designed to be forked and customized quickly.

## Quick start

1. Install dependencies.

```bash
npm install
```

2. Start the dev server.

```bash
npm run dev
```

3. Build for production.

```bash
npm run build
```

4. Preview the production build locally.

```bash
npm run preview
```

## Customize your fork

Update these files first so the site reflects your info.

- [src/assets/data.json](src/assets/data.json) - main content (name, bio, skills, projects, links)
- [src/views/About.jsx](src/views/About.jsx) - about page layout
- [src/views/Home.jsx](src/views/Home.jsx) - landing content and hero copy
- [src/views/Projects.jsx](src/views/Projects.jsx) - projects page layout
- [src/components/NavBar.jsx](src/components/NavBar.jsx) - navigation labels and links
- [src/components/Footer.jsx](src/components/Footer.jsx) - footer links
- [src/assets](src/assets) - images and static assets

If you change filenames or routes, also update the links in [src/components/NavBar.jsx](src/components/NavBar.jsx) and [src/components/ScrollToAnchor.jsx](src/components/ScrollToAnchor.jsx).

## Deployment

This repo is Vite-ready and can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).

Typical steps:

1. Run `npm run build`.
2. Deploy the `dist/` folder.

## Contributing

If you use this repo for your own portfolio, feel free to fork and customize. Attribution is appreciated but not required.
