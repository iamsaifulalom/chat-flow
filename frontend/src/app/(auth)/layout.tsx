import React, { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className='w-full h-dvh grid place-items-center'>
            <div className='w-80'>
                {children}
            </div>
        </main>
    )
}
