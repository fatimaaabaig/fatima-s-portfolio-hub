import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/fatima-s-portfolio-hub/",
  resolve: {
    tsconfigPaths: true,
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});