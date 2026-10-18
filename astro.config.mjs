import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lumen-et-umbra.github.io',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
