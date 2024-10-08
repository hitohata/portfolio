import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import icons from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [icons()]
});