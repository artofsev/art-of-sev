import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse officielle du site (sev-créations.fr, écrit sans accent pour Internet).
export default defineConfig({
  site: 'https://www.xn--sev-crations-geb.fr',
  integrations: [sitemap()],
});
