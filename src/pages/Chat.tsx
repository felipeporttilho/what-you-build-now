
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { Send } from "lucide-react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso te ajudar hoje?", isUser: false },
    { text: "Quais são os seus recursos?", isUser: true },
    { text: "Eu posso ajudar com tarefas, responder perguntas e muito mais!", isUser: false }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setMessages([...messages, { text: message, isUser: true }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <ChatHeader />
      
      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500 mb-2">
            Converse com a Lucida
          </h1>
        </div>

        <div className="w-full max-w-3xl flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg.text}
              isUser={msg.isUser}
            />
          ))}
        </div>

        <form 
          onSubmit={handleSendMessage}
          className="w-full max-w-3xl flex gap-2"
        >
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </main>
    </div>
  );
}
