import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useChat(sendTo: string) {
  const socketRef = useRef<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [adminOnline, setAdminOnline] = useState(false);


  useEffect(() => {
    const socketServer =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

    const socket = io(socketServer, {
      auth: {
        accessToken: localStorage.getItem("accessToken"),
      },
    });

    socketRef.current = socket;

    socket.on("chat:message", (chat) => {
      setMessages((prev) => [...prev, chat]);
    });


    socket.on("admin:status", ({ online }) => {
      console.log(online)
      setAdminOnline(online);
    });

    return () => {
      socket.off("chat:message");
      socket.disconnect();
      socket.off("admin:status")
    };
  }, []);

  function sendMessage() {
    if (!socketRef.current || !message.trim()) return;

    socketRef.current.emit("chat:message", {
      contents: message,
      sendTo,
    });

    setMessage(""); // clear input
  }

  return { sendMessage, setMessage, messages, message , adminOnline};
}