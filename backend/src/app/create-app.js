// file: src/app/create-app.js
import express from 'express';
import { registerRoutes } from './register-routes.js';
import { registerMiddlewares } from './register-middlewares.js';

export function createApp() {
    const app = express()

    registerMiddlewares(app)
    registerRoutes(app)
    
    return app
}