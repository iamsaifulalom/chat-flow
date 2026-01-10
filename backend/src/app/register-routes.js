import { healthHandler } from "../lib/health-handler.js";

export function registerRoutes(app) {
    
    app.get("/health", healthHandler);

}