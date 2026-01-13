import { cn } from '@/lib/utils'
import { Headset } from 'lucide-react'

export default function ChatHeader({ isOnline }: { isOnline?: boolean }) {
    return (
        <div className="border-b h-16 flex justify-between gap-2 items-center p-4">
            <Headset size={20}/>
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
