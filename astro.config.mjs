import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), react()],
  output: "server",
  adapter: vercel()
});