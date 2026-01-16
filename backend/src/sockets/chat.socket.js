import { verifyAccessToken } from '../modules/auth/auth.tokens.js';

const ADMIN_STATUS = new Set();

export default function registerChatSocket(io) {
  io.use((socket, next) => {
    const token = socket.handshake.auth.accessToken;
    if (!token) return next(new Error("Unauthorized"));

    try {
      socket.user = verifyAccessToken(token);
      next();
    } catch {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    const { id, role } = socket.user;

    if (role === "ADMIN") {
      socket.join("ADMIN");
      ADMIN_STATUS.add(id);
      io.emit("admin:status", { online: true });

    } else {
      socket.join(id);
      console.log(id)
    }

    socket.on("chat:message", (data) => {
      const { contents, sendTo } = data;

      const message = {
        contents,
        from: id,
        role,
        time: Date.now(),
        id: Date.now(),
      };

      // send to sender itself
      socket.emit("chat:message", message);

      // send to the other side
      if (role === "ADMIN") {
        io.to(sendTo).emit("chat:message", message); // ADMIN → USER
      } else {
        io.to("ADMIN").emit("chat:message", message); // USER → ADMIN
      }
    });

    
    socket.on("disconnect", () => {
      if (role === "ADMIN") {
        ADMIN_STATUS.delete(id);

        io.emit("admin:status", { online: ADMIN_STATUS.size > 0 });
      }
    });

  });


}