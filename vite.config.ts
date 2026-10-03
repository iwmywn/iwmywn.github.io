import { resolve } from "node:path"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { ViteMinifyPlugin } from "vite-plugin-minify"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: { "~": resolve(import.meta.dirname, "src") },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    ViteMinifyPlugin({}),
  ],
})
