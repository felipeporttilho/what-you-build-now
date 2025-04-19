import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths" // opcional, mas recomendado se usar paths no tsconfig

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // <-- isso ajuda a reconhecer os aliases do tsconfig.json
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  build: {
    outDir: "dist", // <-- obrigatório para o Firebase
  },
})
