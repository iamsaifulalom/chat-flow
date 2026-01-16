// FILE: src/app/register-routes.js

import { healthHandler } from "../lib/health-handler.js";
import authRoutes from '../modules/auth/auth.routes.js';
import chatRoutes from '../modules/chat/chat.routes.js';

export function registerRoutes(app) {

    app.get("/health", healthHandler);
    app.use("/auth", authRoutes);
    app.use("/chats", chatRoutes);

}