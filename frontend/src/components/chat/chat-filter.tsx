import { CHAT_FILTERS } from '@/constants/chat-filters'
import { Badge } from '../ui/badge'

export default function ChatFilter() {
    return (
        <div className="flex justify-between gap-2">
            {CHAT_FILTERS.map(({ key, label, icon: Icon }) => (
                <Badge
                    key={key}
                    variant="outline"
                    className="px-4 py-1 text-sm cursor-pointer flex items-center gap-1"
                >
                    <Icon size={14} />
                    {label}
                </Badge>
            ))}
        </div>
    )
}
