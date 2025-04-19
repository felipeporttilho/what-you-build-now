// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Chat       from "@/pages/Chat";
import Login      from "@/pages/Login";
import Index      from "@/pages/Index";
import NotFound   from "@/pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* página de apresentação ― botão “Acessar Login” */}
            <Route path="/"        element={<Index />} />

            {/* tela de login / cadastro */}
            <Route path="/login"   element={<Login />} />

            {/*  ✅ nova rota protegida (ou não) para o chat */}
            <Route path="/chat"    element={<Chat  />} />

            {/* 404 */}
            <Route path="*"        element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
