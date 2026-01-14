import mongoose, { Schema } from "mongoose";

const ChatSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    adminId: { type: Schema.Types.ObjectId, ref: "User", default: null },
    status: { type: String, enum: ["open", "closed"], default: "open", },
    createdAt: { type: Date, default: Date.now },
    lastMessageAt: { type: Date, default: Date.now },
}, { versionKey: false });


ChatSchema.methods.updateLastMessageAt = function () {
    this.lastMessageAt = new Date();
    return this.save();
};

export const Chat = mongoose.model("Chat", ChatSchema);
