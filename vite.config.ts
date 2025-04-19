// vite.config.ts  — colado na raiz do repo
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  /**
   *  Resolve permite usar “@/…” em vez de caminhos relativos (../../)
   */
  resolve: {
    alias: {
      // atalho genérico para qualquer coisa dentro de src
      "@": path.resolve(__dirname, "./src"),

      // atalhos específicos (opcional, mas ajuda no autocomplete)
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@integrations": path.resolve(__dirname, "./src/integrations"),
    },
  },

  /**
   *  Config de build (o Firebase vai ler exatamente essa pasta)
   */
  build: {
    outDir: "dist",      // <‑‑ nome da pasta que o Firebase Hosting usa
    emptyOutDir: true,   // limpa dist antes de cada build
  },

  /**
   *  Só conveniência para rodar localmente
   */
  server: {
    port: 5173,
    open: true,
  },
});
