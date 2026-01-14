"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarInset,
    SidebarProvider
} from '@/components/sidebar/sidebar';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useRequireAuth } from '@/providers/auth-provider';
import { CircleUserRound, MessageCircle, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    const { loading, user } = useRequireAuth("ADMIN");

    if (loading || !user || user.role !== "ADMIN") {
        return <div className="h-dvh flex items-center justify-center">Loading Admin...</div>;
    }
    return (
        <html lang="en">
            <body>
                <SidebarProvider>
                    <Sidebar className='w-16'>
                        <SidebarContent className='space-y-2 w-full overflow-hidden bg-muted flex flex-col justify-between items-center py-4'>
                            <Link href="/admin/chat">
                            <MessageCircle />
                            </Link>
                            <div className='flex flex-col gap-3'>
                                <Settings />
                                <CircleUserRound />
                            </div>
                        </SidebarContent>
                    </Sidebar>
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    )
}
