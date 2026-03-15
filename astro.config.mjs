// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/xuanchen_astro',
  vite: {
    build: {
      cssMinify: true,
      assetsInlineLimit: 100000
    }
  }
});
