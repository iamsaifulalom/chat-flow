"use client"
import ChatListItem from '@/components/chat-list-item'
import ChatFilter from '@/components/chat/chat-filter'
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/sidebar/sidebar'
import { Input } from '@/components/ui/input'
import { useChat } from '@/hooks/use-chat'
import React from 'react'

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const {} =  useChat("")
    return (
        <SidebarProvider>
            <Sidebar className='w-80'>
                <div className='flex'>
                    <div className='min-h-dvh p-4 space-y-4'>
                        <h1 className='text-3xl font-bold'>Chats</h1>
                        <Input placeholder='Search...' />
                        <ChatFilter />
                        <ChatListItem />
                    </div>
                    <div className='flex-1'>

                    </div>
                </div>
            </Sidebar>
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
