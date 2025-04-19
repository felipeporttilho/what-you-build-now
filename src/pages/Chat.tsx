import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { Send } from "lucide-react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso te ajudar hoje?", isUser: false }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Adiciona a mensagem do usuário ao chat
    const userMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatWithLucida", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      const aiMessage = {
        text: data.answer || "Desculpe, não consegui entender...",
        isUser: false
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Erro ao se comunicar com a Lúcida. 😓", isUser: false }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <ChatHeader />

      <main className="flex-1 flex flex-col items-center p-4">
        <div className="w-full max-w-3xl text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500 mb-2">
            Converse com a Lúcida
          </h1>
        </div>

        <div className="w-full max-w-3xl flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
          ))}
        </div>

        <form
          onSubmit={handleSendMessage}
          className="w-full max-w-3xl flex gap-2"
        >
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              loading ? "A Lúcida está respondendo..." : "Digite sua mensagem..."
            }
            disabled={loading}
            className="flex-1"
          />
          <Button type="submit" disabled={loading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </main>
    </div>
  );
}
