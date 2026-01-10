import { healthHandler } from "../lib/health-handler.js";
import authRoutes from '../modules/auth/auth.routes.js'

export function registerRoutes(app) {
    
    app.get("/health", healthHandler);
    app.use("/auth", authRoutes);
}