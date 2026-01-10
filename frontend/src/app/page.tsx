"use client"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from '@/components/ui/input-group'
import { ArrowUp } from 'lucide-react'
import { useEffect } from 'react'
import { io } from 'socket.io-client';

export default function HOME() {
  
  useEffect(() => {
    const socket = io("http://localhost:5000", { withCredentials: true });
    socket.emit("hello", "world")
  }, [])

  return (
    <div className='p-6 max-w-sm mx-auto flex flex-col h-dvh justify-between'>
      <InputGroup className='max-h-52'>
        <InputGroupTextarea
          placeholder='Lets chat with me.'
        />
        <InputGroupAddon align="block-end" className='flex justify-end'>
          <InputGroupButton className="rounded-full" variant="default" size="icon-xs">
            <ArrowUp />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
