"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatInput, ChatMessageList } from "@/components/ui/chat";
import { chatMessages } from "@/constants/demo-chat-histrory";
import { useChat } from "@/hooks/use-chat";
import { useParams } from "next/navigation"

export default function Chat() {
  const { chatId } = useParams();
  const { sendMessage, setMessage } = useChat("Admin")

  return (
    <div className="flex flex-col h-dvh">
      <header className="w-full border-b sticky top-0 left-0 bg-background z-10 h-16 flex justify-between items-center px-4">
        <Avatar>
          <AvatarImage />
          <AvatarFallback >
            A
          </AvatarFallback>
        </Avatar>
      </header>


      <ChatMessageList chatMessages={chatMessages} />
      <ChatInput />
    </div>
  )
}
