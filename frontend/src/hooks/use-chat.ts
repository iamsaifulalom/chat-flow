import { getActiveChatHistory } from "@/api/api.chat";
import { env } from "@/config/env";
import { useAuth } from "@/providers/auth-provider";
import { useEffect, useRef, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export function useChat() {
  const { user } = useAuth()
  const socketRef = useRef<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [chatId, setChatId] = useState("");
  const [adminOnline, setAdminOnline] = useState(false);

  const [messages, setMessages] = useState<any[]>([]);
  const [chatList, setChatList] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    const socket = io(env.NEXT_PUBLIC_BACKEND_URL, {
      auth: { accessToken: token },
    });
    socketRef.current = socket;

    async function getChatHistory() {
      const { data } = await getActiveChatHistory(token);
      setChatId(data.data.chatId)
      console.log(data.data.history)
      setMessages(data.data.history)

    }
    getChatHistory()

    socket.on("chat:message", (msg) => {
      setMessages(prev => prev.some(m => m.id === msg.id) ? prev : [...prev, msg]);
    });


    socket.on("admin:chat_list_update", (data) => {
      setChatList(prev => {
        const filtered = prev.filter(item => item.userId !== data.userId);
        return [data, ...filtered];
      });
    });

    return () => {
      socket.removeAllListeners()
      socket.disconnect();

    };
  }, []);

  const sendMessage = useCallback(() => {
    if (!socketRef.current || !message.trim()) return;

    socketRef.current.emit("chat:message", {
      contents: message,
      chatId,
      role: user?.role
    });
    setMessage("");
  }, [message, chatId]);

  return {
    sendMessage, setMessage, message,
    messages, setMessages, adminOnline, chatList
  };
}