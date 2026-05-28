import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // @ts-ignore
    nitro: {
      preset: "vercel",
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
