import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Quand vous aurez votre nom de domaine, remplacez l'adresse ci-dessous.
export default defineConfig({
  site: 'https://art-of-sev.vercel.app',
  integrations: [sitemap()],
});
