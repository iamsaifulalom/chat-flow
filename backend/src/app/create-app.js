// file: src/app/create-app.js
import express from 'express';
import { registerRoutes } from './register-routes.js';
import { registerMiddlewares } from './register-middlewares.js';
import { connectDB } from '../infrastructure/database/connect-db.js';

export async function createApp() {
    const app = express()

   await connectDB()

    registerMiddlewares(app)
    registerRoutes(app)
    
    return app
}