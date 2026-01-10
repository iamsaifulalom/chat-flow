export default function registerChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join-chat", ({ chatId }) => {
      socket.join(chatId);
    });

    socket.on("visitor-message", async ({ chatId, text }) => {
      // TODO: save message to DB here

      io.to(chatId).emit("new-message", {
        sender: "visitor",
        text,
        createdAt: new Date(),
      });
    });

    socket.on("admin-message", async ({ chatId, text }) => {
      // TODO: save message to DB here

      io.to(chatId).emit("new-message", {
        sender: "admin",
        text,
        createdAt: new Date(),
      });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};
