import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea
} from './input-group';
import { ArrowUp, Plus } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Headset } from "lucide-react";
import React, { ReactNode } from "react";

export type ChatMessageProps = {
    id: number
    contents: string
    role: "ADMIN" | "USER",
    time: string
}

type ChatInputProps = {
    onSend?: () => void
    onTextChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value: string
}

export function Chat({ children }: { children: ReactNode }) {
    return (
        <div className="fixed right-10 flex flex-col bottom-10 w-100 h-130 bg-background rounded-lg shadow-lg border">
            {children}
        </div>
    )
}

interface ChatHeaderProps {
  isOnline?: boolean;
  queueCount?: number;
}

export function ChatHeader({ isOnline, queueCount = 10 }: ChatHeaderProps) {
  return (
    <div className="border-b h-16 flex justify-between gap-2 w-full items-center p-4">
      {/* Left: Agent info */}
      <div className="flex gap-3 items-center">
        <Headset size={20} />
        <div>
          <h1 className="text-sm">Support Agent</h1>
          <div className="flex gap-1 items-center">
            <div
              className={cn(
                "size-3 rounded-full",
                isOnline ? "bg-green-400" : "bg-gray-300"
              )}
            />
            <p className="text-xs">{isOnline ? "Online" : "Offline"}</p>
          </div>
        </div>
      </div>

      {/* Right: Queue indicator */}
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">
          {queueCount} in queue
        </p>
        {/* Optional: small badge */}
        {queueCount > 0 && (
          <span className="w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
            {queueCount}
          </span>
        )}
      </div>
    </div>
  );
}

export function ChatMessageList({ chatMessages }: { chatMessages?: ChatMessageProps[] }) {
    return (
        <div className='flex-1 overflow-y-auto space-y-3 p-4'>

            {/* render chat history with proper alignment */}
            {chatMessages?.map(({ role, contents, time, id }) => (
                <div
                    key={id}
                    className={cn(
                        'flex-1 overflow-y-auto w-[80%]',
                        role === "ADMIN" ? "" : "ml-auto"
                    )}
                >
                    <p className={cn(
                        'p-2 text-sm rounded-sm',
                        role === "ADMIN" ? "bg-muted" : "bg-accent-foreground text-white"
                    )}>
                        {contents}
                    </p>
                    <p className={cn(
                        'text-xs text-muted-foreground mt-1',
                        role === "ADMIN" ? "" : "text-right"
                    )}>
                        {time}
                    </p>
                </div>
            ))}
        </div>
    )
}

export function ChatInput({ onSend, onTextChange  , value}: ChatInputProps) {
    return (
        <div className='px-4 pb-4'>
            <InputGroup className='max-h-40'>
                <InputGroupTextarea
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey && onSend) {
                            e.preventDefault();
                            onSend();
                        }
                    }}
                    value={value}
                    onChange={onTextChange}
                    placeholder='Lets chat with me.'
                />
                <InputGroupAddon align="block-end" className='flex justify-between'>
                    <InputGroupButton className="rounded-full" variant="secondary" size="icon-sm">
                        <Plus />
                        <span className="sr-only">Add files</span>
                    </InputGroupButton>
                    <InputGroupButton onClick={onSend} className="rounded-full" variant="default" size="icon-sm">
                        <ArrowUp />
                        <span className="sr-only">Send</span>
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export function ChatFooter({ children }: { children?: ReactNode }) {
    return (
        <div className="border-b h-16 flex justify-between gap-2 items-center p-4">
            {children}
        </div>
    )
}