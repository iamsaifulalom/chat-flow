import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ChatListItem() {
    return (
        <Link href="/admin/chat/1111">
            <div className='w-full h-16 cursor-pointer overflow-hidden flex items-center gap-3'>
                <div className='relative'>
                    <Image
                        src="/images/avatar.jpeg"
                        className='aspect-square object-cover overflow-hidden rounded-full'
                        width={50}
                        height={50}
                        alt='User avatar'
                    />
                    <div className='absolute bottom-0 right-0 size-3.5 rounded-full bg-green-500' />
                </div>
                <div className='text-sm flex-1'>
                    <h1>User name</h1>
                    <div className='flex justify-between w-full'>
                        <p className='text-xs text-muted-foreground'>Last message ...</p>
                        <p className='text-xs text-muted-foreground'>25/01/2026</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
