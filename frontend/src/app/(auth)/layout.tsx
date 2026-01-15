import React, { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className='w-full h-dvh grid place-items-center'>
            <div className='w-72 md:w-90'>
                {children}
            </div>
        </main>
    )
}
