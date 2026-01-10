"use client"

import React, {
    useContext,
    ReactNode,
    useState,
    ComponentType,
    SVGProps,
} from 'react';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from './ui/button';

//  Define the context type
interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

//  Create context
const SidebarContext = React.createContext<SidebarProps | undefined>(undefined);

// Custom hook to use the sidebar context
export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}

export function SidebarProvider({ children }: { children?: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar: () => setIsSidebarOpen(p => !p) }} >
            <div className="relative flex h-dvh overflow-hidden">
                {children}
            </div>
        </SidebarContext.Provider>
    )
}


// Sidebar component

export function Sidebar({ children, className }: { children?: ReactNode, className?: string }) {
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    return (
        <>
            <aside className={cn(
                "w-64 h-dvh border-r z-30 overflow-y-auto transition-transform fixed flex flex-col left-0 right-0 bg-background lg:hidden",
                "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full",
                className
            )}>
                {children}
            </aside>

            {isSidebarOpen && <div onClick={toggleSidebar} className="fixed top-0 left-0 w-full h-screen bg-foreground/10 z-20 lg:hidden" />}

            <aside className={cn(
                "w-64 h-dvh border-r shrink-0  hidden lg:flex flex-col justify-between",
                className
            )}>
                {children}
            </aside>
        </>
    );
}


// 6. Sidebar inset
export function SidebarInset({ children }: { children?: ReactNode }) {
    return (
        <main className="h-screen overflow-y-auto flex-col flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden duration-300 ease-in-out">
            {children}
        </main>
    )
}
// 6. Sidebar footer
export function SidebarFooter() {

    return (
        <div className="w-full">
            <p className='text-center text-muted-foreground border-t py-4 text-sm'>
                © {new Date().getFullYear()} ChatFlow. Inc.
            </p>
        </div>
    )
}
export function SidebarHeader() {
    return (
        <Link href="/" className="px-6 flex items-center h-16 border-b">
            <Image src="/images/logo.png" alt='site-logo' width={100} height={50} />
        </Link>
    )
}


export function SidebarContent({ children , className }: { children?: React.ReactNode , className?: string }) {
    const { toggleSidebar } = useSidebar();
    const pathname = usePathname();

    return (
        <div className={cn(
            "overflow-y-auto flex-1",
            "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            className
        )}>
            {children}
        </div>
    );
}
