
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao seu aplicativo</h1>
        <p className="text-xl text-gray-600">Comece a construir seu incrível projeto aqui!</p>
      </div>
      
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button asChild className="px-8">
          <Link to="/login">Acessar Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
