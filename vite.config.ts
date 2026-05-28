import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: process.env.BUILD_PRESET || undefined,
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
