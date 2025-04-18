
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function ChatHeader() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-blue-500 text-2xl font-bold">C</div>
          <nav className="flex gap-6">
            <Button variant="ghost">Início</Button>
            <Button variant="ghost">Quem somos</Button>
            <Button variant="ghost">Produtos</Button>
            <Button variant="ghost">Novos</Button>
          </nav>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            supabase.auth.signOut();
            navigate("/login");
          }}
        >
          Sair
        </Button>
      </div>
    </header>
  );
}
