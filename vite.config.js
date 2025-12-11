import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite configuration
 * Uses different base paths for development and production:
 * - Development: "/" for local dev server
 * - Production: "/aoin-react/" for GitHub Pages deployment
 */
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
  };

  if (command === "build") {
    config.base = "/aoin-react/";
  }

  return config;
});
