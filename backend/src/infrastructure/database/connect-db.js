import { connect } from 'mongoose';
import { env } from '../../config/env.js';

export async function connectDB() {
    try {
        await connect(env.DATABASE_URL);
        console.log("Database connection success.");
    } catch (error) {
        console.log("DB connection failed!");
    }
}