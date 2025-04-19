import { useEffect, useRef, useState } from "react";

interface Message {
  sender: "user" | "lucida";
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const conversationIdRef = useRef<string>("14241f6bc4");

  // Rolar para a última mensagem sempre que a lista de mensagens ou o indicador de digitação mudar
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focar o campo de input quando reabilitado ou ao montar o componente
  useEffect(() => {
    if (!isTyping) {
      inputRef.current?.focus();
    }
  }, [isTyping]);

  const sendMessage = async () => {
    const message = input.trim();
    if (!message) return;
    try {
      // Desabilitar input e botão (e mostrar indicador de digitação via estado)
      setIsTyping(true);

      // Adicionar mensagem do usuário ao chat
      const userMessage: Message = { sender: "user", text: message };
      setMessages((prev) => [...prev, userMessage]);

      // Limpar campo de input
      setInput("");

      console.log("Enviando mensagem:", message);
      console.log("ID da conversa:", conversationIdRef.current);

      // Enviar mensagem e esperar resposta da Cloud Function
      const response = await fetch(
        "https://us-central1-lucidaservice-bd03c.cloudfunctions.net/chatWithLucida",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            message: message,
            conversation_id: conversationIdRef.current,
          }),
        }
      );

      console.log("Status da resposta:", response.status);
      const data: { answer?: string; conversation_id?: string } = await response.json();

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status} - ${JSON.stringify(data)}`);
      }

      // Atualizar conversation_id se for retornado
      if (data.conversation_id) {
        conversationIdRef.current = data.conversation_id;
      }

      // Remover indicador de digitação
      setIsTyping(false);

      // Adicionar resposta do bot ao chat
      if (data.answer) {
        const botMessage: Message = { sender: "lucida", text: data.answer };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Erro:", error);
      // Remover indicador de digitação e exibir mensagem de erro
      setIsTyping(false);
      const errorMessage: Message = {
        sender: "lucida",
        text: "Desculpe, ocorreu um erro ao processar sua mensagem.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              msg.sender === "user"
                ? "bg-blue-200 self-end text-right"
                : "bg-gray-300 self-start text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="mb-2 p-2 rounded bg-gray-300 self-start text-left">
            Digitando...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t bg-white flex">
        <textarea
          ref={inputRef}
          className="flex-1 p-2 border rounded-l resize-none"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
          rows={1}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          disabled={isTyping}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
