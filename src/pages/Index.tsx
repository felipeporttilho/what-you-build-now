import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const SVG_PATH =
  "M16.3781 5.8047C14.0642 5.8047 12.1875 7.68144 12.1875 9.99531C12.1875 12.3092 14.0642 14.1859 16.3781 14.1859C18.6919 14.1859 20.5687 12.3092 20.5687 9.99531C20.5687 7.68144 18.6919 5.8047 16.3781 5.8047ZM16.3781 12.9437C14.7486 12.9437 13.4298 11.6248 13.4298 9.99531C13.4298 8.36582 14.7486 7.04696 16.3781 7.04696C18.0076 7.04696 19.3264 8.36582 19.3264 9.99531C19.3264 11.6248 18.0076 12.9437 16.3781 12.9437ZM6.37491 3.01332C6.37491 2.79482 6.55228 2.61745 6.77078 2.61745H10.9978C11.2163 2.61745 11.3937 2.79482 11.3937 3.01332V7.24031C11.3937 7.45881 11.2163 7.63618 10.9978 7.63618H6.77078C6.55228 7.63618 6.37491 7.45881 6.37491 7.24031V3.01332ZM6.37491 12.7503C6.37491 12.5318 6.55228 12.3545 6.77078 12.3545H10.9978C11.2163 12.3545 11.3937 12.5318 11.3937 12.7503V16.9773C11.3937 17.1958 11.2163 17.3732 10.9978 17.3732H6.77078C6.55228 17.3732 6.37491 17.1958 6.37491 16.9773V12.7503ZM3.17839 7.92931C3.01072 8.09691 2.74084 8.09691 2.57324 7.92931L0.12324 5.47931C-0.0443594 5.31167 -0.0443594 5.0418 0.12324 4.8742L2.57324 2.4242C2.74084 2.2566 3.01072 2.2566 3.17839 2.4242L5.62839 4.8742C5.79599 5.0418 5.79599 5.31167 5.62839 5.47931L3.17839 7.92931ZM3.17839 17.5663C3.01072 17.7339 2.74084 17.7339 2.57324 17.5663L0.12324 15.1163C-0.0443594 14.9487 -0.0443594 14.6788 0.12324 14.5112L2.57324 12.0612C2.74084 11.8936 3.01072 11.8936 3.17839 12.0612L5.62839 14.5112C5.79599 14.6788 5.79599 14.9487 5.62839 15.1163L3.17839 17.5663Z";

// —————————————— Subcomponentes ——————————————

const DescrWrapper: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("relative w-full", className)}>
    <div className="w-full">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-[#4b5162]/80 text-center leading-relaxed">
          Aproveite o poder da inteligência artificial para transformar os dados da sua empresa em insights acionáveis,
          impulsionando você a novos patamares de <span className="text-[#387ff5] font-semibold">sucesso</span>.
        </p>
      </div>
    </div>
  </div>
);

const EyebrowTag: React.FC = () => (
  <div className="relative bg-white inline-flex items-center gap-2 px-3 py-2 rounded-2xl shadow-[0_0_1px_rgba(44,58,114,0.05),0_2px_6px_rgba(44,58,114,0.05),0_10px_18px_rgba(58,76,146,0.10)] border border-[#b6bccd]/70">
    <div className="w-5 h-5">
      <svg className="w-full h-full" fill="none" viewBox="0 0 18 17" role="img" aria-label="IA">
        <path d={SVG_PATH} fill="#387FF5" />
      </svg>
    </div>
    <span className="text-xs sm:text-sm text-[#4b5162]">
      Inteligência de Negócios com IA Generativa para Pequenos Empreendedores
    </span>
  </div>
);

const TextWrapper: React.FC = () => (
  <div className="flex flex-col items-center gap-5">
    <EyebrowTag />
    <h1 className="text-center font-bold text-[#1c1f25] leading-tight tracking-[-0.02em]
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[clamp(2.5rem,6vw,4.5rem)]">
      <span className="block">Revolucione a Gestão do Seu</span>
      <span className="block">
        Negócio com Análises <span className="text-[#387ff5]">Inteligentes</span> e Automatizadas
      </span>
    </h1>
    <DescrWrapper />
  </div>
);

const ButtonGroup: React.FC = () => (
  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
    <Button asChild className="bg-[#387ff5] hover:bg-[#387ff5]/90 px-5 py-3 rounded-xl text-white font-semibold">
      <Link to="/login">Comece sua avaliação gratuita</Link>
    </Button>
  </div>
);

const ContentWrapper: React.FC<{ className?: string }> = ({ className }) => (
  <section className={cn("w-full py-10 sm:py-14 md:py-20", className)}>
    <div className="mx-auto max-w-[1204px] px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 md:gap-8">
      <TextWrapper />
      <ButtonGroup />
    </div>
  </section>
);

// —————————————— Navbar responsiva ——————————————

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-[1204px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold select-none" aria-label="Lúcida home">
          <span className="text-[#387ff5]">Lucida</span>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button
              asChild
              className="border border-[#387ff5] text-[#387ff5] hover:bg-[#387ff5]/10 rounded-lg px-5 py-2 font-medium"
            >
              <Link to="/login">Entrar</Link>
            </Button>
          </div>

          <button
            aria-label="Abrir menu"
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={cn("sm:hidden border-t border-gray-200", open ? "block" : "hidden")}>
        <div className="px-4 py-3 flex flex-col gap-2">
          <Button
            asChild
            className="w-full border border-[#387ff5] text-[#387ff5] hover:bg-[#387ff5]/10 rounded-lg px-5 py-2 font-medium"
          >
            <Link to="/login">Entrar</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

// —————————————— Página ——————————————

export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <ContentWrapper />
      </main>
    </div>
  );
}
