import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupTextarea
} from './input-group';
import { ArrowUp, Plus } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Headset } from "lucide-react";
import { ReactNode } from "react";

export type ChatMessageProps = {
  id: number
  text: string
  isAgent: boolean
  time: string
}

export function Chat({ children }: { children: ReactNode }) {
    return (
        <div className="fixed right-10 flex flex-col bottom-10 w-100 h-130 bg-background rounded-lg shadow-lg border">
            {children}
        </div>
    )
}

export function ChatHeader({ isOnline }: { isOnline?: boolean }) {
    return (
        <div className="border-b h-16 flex justify-between gap-2 items-center p-4">
            <Headset size={20} />
            <div className="flex-1">
                <h1 className="text-sm">Suport agent</h1>
                <div className="flex gap-1">
                    <div className={cn(
                        "size-3 rounded-full",
                        isOnline ? "bg-green-400" : "bg-gray-300"
                    )} />
                    <p className="text-xs">{isOnline ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

export function ChatMessageList({ children }: { children?: ReactNode }) {
    return (
        <div className='flex-1 overflow-y-auto space-y-3 p-4'>
            {children}
        </div>
    )
}
export function ChatMessage({ isAgent , text , time}: ChatMessageProps) {
    return (
        <div className={cn(
            'flex-1 overflow-y-auto w-[80%]',
            isAgent ? "ml-auto" : ""
        )}>
            <p className='p-2 bg-muted text-sm rounded-sm'>{text}</p>
            <p className='text-xs text-muted-foreground mt-1'>{time}</p>
        </div>
    )
}

export function ChatInput() {
    return (
        <div className='px-4 pb-4'>
            <InputGroup className='max-h-40'>
                <InputGroupTextarea
                    placeholder='Lets chat with me.'
                />
                <InputGroupAddon align="block-end" className='flex justify-between'>
                    <InputGroupButton className="rounded-full" variant="secondary" size="icon-sm">
                        <Plus />
                        <span className="sr-only">Add files</span>
                    </InputGroupButton>
                    <InputGroupButton className="rounded-full" variant="default" size="icon-sm">
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