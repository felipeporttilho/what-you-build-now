import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Merge de classes utilitário
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Caminho SVG para o ícone (igual ao fornecido)
const SVG_PATH =
  "M16.3781 5.8047C14.0642 5.8047 12.1875 7.68144 12.1875 9.99531C12.1875 12.3092 14.0642 14.1859 16.3781 14.1859C18.6919 14.1859 20.5687 12.3092 20.5687 9.99531C20.5687 7.68144 18.6919 5.8047 16.3781 5.8047ZM16.3781 12.9437C14.7486 12.9437 13.4298 11.6248 13.4298 9.99531C13.4298 8.36582 14.7486 7.04696 16.3781 7.04696C18.0076 7.04696 19.3264 8.36582 19.3264 9.99531C19.3264 11.6248 18.0076 12.9437 16.3781 12.9437ZM6.37491 3.01332C6.37491 2.79482 6.55228 2.61745 6.77078 2.61745H10.9978C11.2163 2.61745 11.3937 2.79482 11.3937 3.01332V7.24031C11.3937 7.45881 11.2163 7.63618 10.9978 7.63618H6.77078C6.55228 7.63618 6.37491 7.45881 6.37491 7.24031V3.01332ZM6.37491 12.7503C6.37491 12.5318 6.55228 12.3545 6.77078 12.3545H10.9978C11.2163 12.3545 11.3937 12.5318 11.3937 12.7503V16.9773C11.3937 17.1958 11.2163 17.3732 10.9978 17.3732H6.77078C6.55228 17.3732 6.37491 17.1958 6.37491 16.9773V12.7503ZM3.17839 7.92931C3.01072 8.09691 2.74084 8.09691 2.57324 7.92931L0.12324 5.47931C-0.0443594 5.31167 -0.0443594 5.0418 0.12324 4.8742L2.57324 2.4242C2.74084 2.2566 3.01072 2.2566 3.17839 2.4242L5.62839 4.8742C5.79599 5.0418 5.79599 5.31167 5.62839 5.47931L3.17839 7.92931ZM3.17839 17.5663C3.01072 17.7339 2.74084 17.7339 2.57324 17.5663L0.12324 15.1163C-0.0443594 14.9487 -0.0443594 14.6788 0.12324 14.5112L2.57324 12.0612C2.74084 11.8936 3.01072 11.8936 3.17839 12.0612L5.62839 14.5112C5.79599 14.6788 5.79599 14.9487 5.62839 15.1163L3.17839 17.5663Z";

// Componentes auxiliares para estruturar o banner
const DescrWrapper: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("relative shrink-0 w-full", className)}>
    <div className="relative w-full h-full">
      <div className="box-border flex flex-row gap-2 items-start justify-start px-20 py-0 w-full">
        <div className="basis-0 font-sans font-normal min-h-px min-w-px opacity-80 text-[#4b5162] text-[16px] text-center grow">
          <p className="leading-[1.6]">
            <span>
              {`Aproveite o poder da inteligência artificial para transformar os dados da sua empresa em insights acionáveis, impulsionando você a novos patamares de `}
            </span>
            <span className="text-[#387ff5]">sucesso</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TextWrapper: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex flex-col gap-5 items-center w-full", className)}>
    {/* Tag com ícone AI */}
    <div className="bg-white flex flex-row gap-2 items-center px-3 py-2 rounded-[20px] relative">
      {/* Borda e sombra */}
      <div
        aria-hidden="true"
        className="absolute border border-[#b6bccd] inset-0 pointer-events-none rounded-[20px] shadow-[0px_0px_1px_0px_rgba(44,58,114,0.05),0px_2px_6px_0px_rgba(44,58,114,0.05),0px_10px_18px_0px_rgba(58,76,146,0.1)]"
      />
      {/* Ícone */}
      <div className="relative shrink-0 w-5 h-5">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 18 17" preserveAspectRatio="none">
          <path d={SVG_PATH} fill="#387FF5" />
        </svg>
      </div>
      <div className="font-medium text-[#4b5162] text-[16px]">
        <p className="leading-[1.6] whitespace-pre">
          Inteligência de Negócios com IA Generativa para Pequenos Empreendedores
        </p>
      </div>
    </div>
    {/* Título principal */}
    <div
      className="font-bold text-[#1c1f25] leading-none text-center"
      style={{ width: "min-content", fontVariationSettings: "'opsz' 14" }}
    >
      <p className="leading-[1.16] text-[80px] whitespace-pre-wrap">
        <span>Revolucione </span>
        <span>{`a Gestão do Seu\nNegócio com Análises `}</span>
        <span className="text-[#387ff5]">Inteligentes</span>
        <span>{` e Automatizadas`}</span>
      </p>
    </div>
    <DescrWrapper />
  </div>
);

const ButtonGroup: React.FC = () => (
  <div className="flex flex-row gap-3">
    <Button
      asChild
      className="bg-[#387ff5] hover:bg-[#387ff5]/90 px-5 py-3 rounded-xl text-white font-bold"
    >
      <Link to="/login">Comece sua avaliação gratuita</Link>
    </Button>
  </div>
);

const ContentWrapper: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex flex-col items-center gap-[34px] max-w-[860px] py-24 w-full", className)}>
    <TextWrapper />
    <ButtonGroup />
  </div>
);

const Container: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex flex-col items-center gap-[46px] max-w-[1204px] w-full", className)}>
    <ContentWrapper />
  </div>
);

// Navbar que usa Link para login
const Navbar: React.FC = () => (
  <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-20">
    <div className="max-w-[1204px] mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="text-2xl font-bold select-none" aria-label="Lúcida home">
        <span className="text-[#387ff5]">Lucida</span>
      </a>
      {/* Ação de login */}
      <nav>
        <Button
          asChild
          className="border border-[#387ff5] text-[#387ff5] hover:bg-[#387ff5]/10 rounded-lg px-5 py-2 font-medium transition-colors"
        >
          <Link to="/login">Entrar</Link>
        </Button>
      </nav>
    </div>
  </header>
);

export default function Index() {
  return (
    <div className="bg-[#ffffff] w-full h-full">
      <Navbar />
      <div className="flex flex-col items-center w-full h-full">
        <div className="pb-20 pt-0 px-8 w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}
