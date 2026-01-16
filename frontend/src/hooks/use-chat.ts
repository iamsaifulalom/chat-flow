import { getActiveChatHistory } from "@/api/api.chat";
import { env } from "@/config/env";
import { useEffect, useRef, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export function useChat(sendTo?: string) {
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

    getActiveChatHistory(token)
      .then((data) => { console.log(data) })
      .catch(err => { console.log(err) })
      .finally(() => { })

    // --- Subscriptions ---
    socket.on("chat:history", (data) => {
      setChatId(data.chatId);
      setMessages(data.messages || []);
    });

    socket.on("chat:message", (msg) => {
      setMessages(prev => prev.some(m => m.id === msg.id) ? prev : [...prev, msg]);
    });

    socket.on("admin:status", ({ online }) => setAdminOnline(online));

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
      sendTo: sendTo || "ADMIN",
      chatId
    });
    setMessage("");
  }, [message, sendTo, chatId]);

  return {
    sendMessage, setMessage, message,
    messages, setMessages, adminOnline, chatList
  };
}