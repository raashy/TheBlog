import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), "STORYBLOK");
console.log(env);


// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      Article: "components/storyblok/Article"
    }
  })],
  adapter: vercel()
});