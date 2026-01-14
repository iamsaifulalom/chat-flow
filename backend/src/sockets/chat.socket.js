// FILE: src/app/chat.socket.js

const users = new Map(); // userId -> socketId

export default function registerChatSocket(io) {
  io.use((socket, next) => {
    const auth = socket.handshake.auth;
    console.log(auth)
    socket.userId = "user id"
    next()
  });

  io.on("connection", (socket) => {

    // map userid with socket id to send response a specific user.
    users.set(socket.userId, socket.id);

    console.log(users);


    // Send a message to a chat
    socket.on("chat:message", (chat) => {
      console.log(chat)
    });

    socket.on("disconnect", () => {
      users.delete(socket.userId);
    });
  });
}

