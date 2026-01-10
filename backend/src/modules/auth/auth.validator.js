import { z } from 'zod';

export const signUpSchema = z.object({
    name: z.string().min(4, "Name must be at least 4 charecter."),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 charecter.")
})