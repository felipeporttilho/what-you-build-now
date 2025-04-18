
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  isUser?: boolean;
  message: string;
}

export function ChatMessage({ isUser = false, message }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex w-full",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-2",
        isUser ? "bg-blue-500 text-white" : "bg-blue-100 text-gray-800"
      )}>
        {message}
      </div>
    </div>
  );
}
