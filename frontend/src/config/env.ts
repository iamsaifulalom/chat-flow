import z from 'zod';

export const env = z.object({
    NEXT_PUBLIC_BACKEND_URL: z.string().default("http://localhost:5000")
}).parse(process.env);

