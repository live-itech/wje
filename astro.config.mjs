// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Domain final. Kalau berubah, ubah juga SITUS.domain di src/data/bisnis.ts.
const SITE = 'https://listrikcranesurabaya.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({
      // Halaman uang diprioritaskan di sitemap.
      serialize(item) {
        if (item.url === `${SITE}/`) item.priority = 1.0;
        else if (item.url.includes('/blog/')) item.priority = 0.6;
        else item.priority = 0.9;
        return item;
      },
    }),
  ],
});
