"use client"

import {
  Chat,
  ChatHeader,
  ChatInput,
  ChatMessageList
} from "@/components/ui/chat";
import { chatMessages } from "@/constants/demo-chat-histrory";
import { useChat } from "@/hooks/use-chat";


export default function HOME() {
  const { sendMessage, setMessage } = useChat()

  return (
    <div className='p-6 max-w-sm mx-auto flex flex-col h-dvh justify-between'>
      <h1>Fell free to chat</h1>
      <Chat>
        <ChatHeader isOnline={true} />
        <ChatMessageList
          chatMessages={chatMessages}
        />
        <ChatInput
          onTextChange={(e) => setMessage(e.target.value)}
          onSend={sendMessage}
        />
      </Chat>
    </div>
  )
}
