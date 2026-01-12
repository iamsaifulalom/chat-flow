import 'dotenv/config';
import { connect } from 'mongoose';

export async function connectDB() {
    try {
        await connect(process.env.DATABASE_URL);
        console.log("Database connection success.");
    } catch (error) {
        console.log("DB connection failed!");
    }
}