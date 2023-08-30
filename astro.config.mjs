import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc()],
  output: "server",
  adapter: vercel()
});