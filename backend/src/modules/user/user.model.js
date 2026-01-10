import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    role: { type: String, enum: ["admin", "user"], default: "user" },
});

export const User = model("User", UserSchema);
