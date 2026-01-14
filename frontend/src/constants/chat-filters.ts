// src/constants/chat-filters.ts
import { Bubbles, History, Bookmark } from "lucide-react";

export type ChatFilterKey = "online" | "history" | "saved";

interface CHAT_FILTERS_TYPE {
    key: ChatFilterKey;
    label: string;
    icon: React.ElementType;
}

export const CHAT_FILTERS: CHAT_FILTERS_TYPE[] = [
    {
        key: "online",
        label: "Online",
        icon: Bubbles,
    },
    {
        key: "history",
        label: "History",
        icon: History,
    },
    {
        key: "saved",
        label: "Saved",
        icon: Bookmark,
    },
];
