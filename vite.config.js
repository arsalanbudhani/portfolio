import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Served from https://arsalanbudhani.github.io/portfolio/
  base: "/portfolio/",
});
