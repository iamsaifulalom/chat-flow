import { socketRequireAuth } from '../../infrastructure/http/middlewares/socket-require-auth.js';
import { chatRepository } from './chat.repository.js';

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

    } else {
      // Find or create chat for USER on connect
      const chat = await chatRepository.findOpenedChatByUserId(id)
        || await chatRepository.createChatWithUserId(id);

      const chatId = chat._id.toString();
      socket.join(chatId);
      const chatHistory = await chatRepository
        .findChatHistoryByChatId(chatId)
      socket.emit("chat:history", { messages: [...chatHistory], chatId });
    }

    // --- 2. Shared Message Handler ---
    socket.on("chat:message", async ({ contents, chatId }) => {
      const message = {
        contents,
        from: id,
        role,
        chatId
      };

      // Save and Broadcast to the specific room
      const chat = await chatRepository.addMessage(chatId, message);
      console.log( "chat form after saving", chat)
      io.to(chatId).emit("chat:message", chat);
      socket.emit("chat:message", chat)

      // If user is sending, notify the Admin sidebar
      if (role === "USER") {
        io.to(ADMIN_ROOM).emit("admin:chat_list_update", {
          chatId,
          userId: id,
          name,
          lastMessage: contents,
          timestamp: message.time
        });
      }
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