import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useChat(token?: string) {
  const socketRef = useRef<Socket | null>(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const socketServer = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

    const socket: Socket = io(socketServer, {
      auth: { authToken: token || "JWT token" },
      transports: ["websocket"]
    });

    socketRef.current = socket;

    return () => {
      socket.disconnect();
    }
  }, [])

  function sendMessage() {
    if (!socketRef.current || !message) return;

    socketRef.current.emit("chat:message", {
      text: message,
      sendTo: "ADMIN",
      sendFrom: "USER ID"
    })
  }

  return { sendMessage, setMessage }
}