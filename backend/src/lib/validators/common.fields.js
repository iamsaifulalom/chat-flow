import { z } from 'zod';

export const mongooseId = z.string()
    .nonempty("ID is required")
    .refine((val)=> mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
  })

// Reusable schema for route param `id` (MongoDB ObjectId style)
export const idParam = z.object({ id: mongooseId })