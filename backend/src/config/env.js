import 'dotenv/config';
import { z } from 'zod';

export const env = z.object({
    PORT: z.coerce.number().default(5000),

    // database
    DATABASE_URL: z.string().default("mongodb://localhost:27017/chat-flow"),

    // Authentication
    JWT_SECRET: z.string(),

    //   R2 creadentials
    R2_END_POINT: z.string(),
    R2_BUCKET_NAME: z.string(),
    R2_ACCESS_KEY_ID: z.string(),
    R2_SECRET_ACCESS_KEY: z.string(),
    CDN_BASE_URL: z.string()
}).parse(process.env);
