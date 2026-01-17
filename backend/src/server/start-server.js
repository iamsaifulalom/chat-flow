// FILE: src/server/start-server.js

import { createApp } from "../app/create-app.js";
import { createServer } from 'http';
import { Server } from 'socket.io';
import { env } from "../config/env.js";
import registerChatSocket from "../modules/chat/chat.socket.js";


export async function startServer() {
    const app = await createApp();

    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL || "http://localhost:3000",
            credentials: true,
        }
    });
    registerChatSocket(io);

    httpServer.listen(env.PORT, () => {
        console.log(`Server listen on port ${env.PORT}`)
    })
}