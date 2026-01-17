import { socketRequireAuth } from '../../infrastructure/http/middlewares/socket-require-auth.js';
import { chatRepository } from './chat.repository.js';
import { sanitizer } from './chat.sanitizer.js';

const ADMIN_STATUS = new Set();

const ADMIN_ROOM = "ADMIN_POOL";

export default function registerChatSocket(io) {
  io.use(socketRequireAuth);

  io.on("connection", async (socket) => {
    const { id, role, name } = socket.user;

    // --- 1. Initialization ---
    if (role === "ADMIN") {

      socket.join(ADMIN_ROOM);
      ADMIN_STATUS.add(id);
      io.emit("admin:status", { online: true });
    }

    // --- 2. Shared Message Handler ---
    socket.on("chat:message", async (payload) => {
      const { chatId, contents, role } = payload;

      // Save and Broadcast to the specific room
      const chat = await chatRepository.addMessage({ chatId, contents, role });

      const sanitizedChat = sanitizer(chat)

      io.to(chatId).emit("chat:message", sanitizedChat);
      
      // send back to the user to update chat
      socket.emit("chat:message", sanitizedChat)

      // If user is sending, notify the Admin sidebar
      // if (role === "USER") {
      //   io.to(ADMIN_ROOM).emit("admin:chat_list_update", {
      //     chatId,
      //     userId: id,
      //     name,
      //     lastMessage: contents,
      //     timestamp: message.time
      //   });
      // }
    });

    // --- 3. Management Listeners ---
    socket.on("admin:join_chat", (chatId) => {
      if (role === "ADMIN") socket.join(chatId);
    });

    socket.on("disconnect", () => {
      if (role === "ADMIN") {
        ADMIN_STATUS.delete(id);
        io.emit("admin:status", { online: ADMIN_STATUS.size > 0 });
      }
    });
  });
}