import 'dotenv/config';
import { createApp } from "../app/create-app.js";
import { createServer } from 'http';
import { Server } from 'socket.io';
import registerChatSocket from '../sockets/chat.socket.js';

const PORT = process.env.PORT || 5000;

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

    httpServer.listen(PORT, () => {
        console.log(`Server listen on port ${PORT}`)
    })
}