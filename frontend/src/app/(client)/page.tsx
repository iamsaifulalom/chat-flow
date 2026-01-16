"use client"

import {
  Chat,
  ChatHeader,
  ChatInput,
  ChatMessageList
} from "@/components/ui/chat";
import { useChat } from "@/hooks/use-chat";


export default function HOME() {
  const { sendMessage, setMessage, messages, message , adminOnline } = useChat("ADMIN")

  return (
    <div className='p-6 max-w-sm mx-auto flex flex-col h-dvh justify-between'>
      <h1>Fell free to chat</h1>
      <Chat>
        <ChatHeader isOnline={adminOnline} />
        <ChatMessageList
          chatMessages={messages}
        />
        <ChatInput
          value={message}

          onTextChange={(e) => setMessage(e.target.value)}
          onSend={sendMessage}
        />
      </Chat>
    </div>
  )
}
