import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "index",
      fileName: "index",
    },
  },
});
