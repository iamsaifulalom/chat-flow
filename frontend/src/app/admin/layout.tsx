import ChatListItem from '@/components/chat-list-item';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarInset,
    SidebarProvider
} from '@/components/side-bar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <SidebarProvider>
                    <Sidebar>
                        <SidebarContent className='space-y-2'>
                    Side bar content
                        </SidebarContent>
                        <SidebarFooter />
                    </Sidebar>
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    )
}
