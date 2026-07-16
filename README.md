# Moment365 website

The localized marketing and support site for Moment365.

## Local development

```bash
npm install
npm run dev
```

## Validation and GitHub Pages export

```bash
npm run pages:build
```

The project uses a static Next.js export. `pages:build` validates the source and
syncs the finished site into `docs/`, which remains the GitHub Pages publishing
directory for `moment365.com`.
