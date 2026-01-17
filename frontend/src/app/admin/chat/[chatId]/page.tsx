"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatInput, ChatMessageList } from "@/components/ui/chat";
import { chatMessages } from "@/constants/demo-chat-histrory";
import { useChat } from "@/hooks/use-chat";
import { useParams } from "next/navigation"

export default function Chat() {
  const { chatId } = useParams();
  const { sendMessage, setMessage , messages , message} = useChat("69691b0bf0fa166252ed2213")

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


      <ChatMessageList
        chatMessages={messages}
      />
      <ChatInput
      value={message}
        onSend={sendMessage}
        onTextChange={(e) => setMessage(e.target.value)}
      />
    </div>
  )
}
