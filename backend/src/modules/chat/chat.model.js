import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    contents: { type: String, required: true },
    role: { type: String, enum: ["USER", "ADMIN"], required: true },
    chatId: { type: Schema.Types.ObjectId },
    createdAt: { type: Date, default: Date.now },
}, { _id: true , versionKey: false});

const ChatSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["open", "closed"], default: "open" },
}, { timestamps: true, versionKey: false });

// Indexing for performance
ChatSchema.index({ userId: 1, status: 1 });

export const Chat = model("Chat", ChatSchema);
export const Message = model("Message", MessageSchema);