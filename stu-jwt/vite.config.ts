import { defineConfig } from "vite";
import path from "path";

import solidPlugin from "vite-plugin-solid";
import unocssPlugin from "unocss/vite";

export default defineConfig({
  plugins: [
    unocssPlugin(),
    solidPlugin()
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 3000
  },
  build: {
    target: "esnext",
  },
});
