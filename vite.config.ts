import { defineConfig } from "@Lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/fatima-s-portfolio-hub/",

  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});