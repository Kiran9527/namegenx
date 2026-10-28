# NameGenX

NameGenX is a React and Vite name-generation website. Name generation runs in the browser; it does not require an API or backend.

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm test
npm run lint
npm run build
```

## Routes and generators

Generator and category metadata live in `src/data/catalog.js`. The app builds its React Router routes from that registry so generator slugs, category links, related tools, and directory cards share the same source of truth.

Business and brand naming use the local phrase generator in `src/utils/businessBrandNames.js`. Other generators use the local profiles in `src/components/UsernameGenerator.jsx`. Favorites are stored in browser local storage. Suggestions are not availability, trademark, or domain checks.

The contact form also runs without a server; it saves a draft only in the current browser and does not send email.

Vercel is configured in `vercel.json` to serve the SPA entry point for direct client-side routes. Other static hosts must provide an equivalent SPA fallback.
