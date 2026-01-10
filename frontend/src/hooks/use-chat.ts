"use client";

import { useEffect, useState } from "react";
import { getSocket } from "../lib/socket";

export type Message = {
  sender: "visitor" | "admin";
  text: string;
  createdAt: string;
};

export const useChat = (chatId: string | null) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = getSocket();

  // Ensure visitorId
  const visitorId =
    typeof window !== "undefined"
      ? localStorage.getItem("visitorId") || crypto.randomUUID()
      : "unknown";

  if (typeof window !== "undefined") localStorage.setItem("visitorId", visitorId);

  // Listen + join room
  useEffect(() => {
    if (!chatId) return;

    socket.emit("join-chat", { chatId, visitorId });

    const handleNewMessage = (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("new-message", handleNewMessage);

    return () => {
      socket.off("new-message", handleNewMessage);
    };
  }, [chatId, visitorId, socket]);

  const sendMessage = (text: string) => {
    if (!chatId || !text) return;

    const msg: Message = {
      sender: "visitor",
      text,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, msg]);
    socket.emit("visitor-message", { chatId, text });
  };

  return { messages, sendMessage, visitorId };
};
