"use client"

import{ Chat, ChatHeader  ,ChatInput ,ChatMessage,ChatMessageList} from "@/components/ui/chat"
import ChatBox from "@/components/ui/chat-box"
import { chatMessages } from "@/constent/demo-chat-histrory"


export default function HOME() {

  return (
    <div className='p-6 max-w-sm mx-auto flex flex-col h-dvh justify-between'>
      <h1>Fell free to chat</h1>
      <Chat>
        <ChatHeader isOnline={true} />
        <ChatMessageList>
         {chatMessages.map(chat => (
          <ChatMessage key={chat.id} {...chat}/>
         ))}
        </ChatMessageList>
        <ChatInput />
      </Chat>
    </div>
  )
}
