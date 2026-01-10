import { Schema , model } from 'mongoose';

const MessageSchema = new Schema({
  chatId: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
    required: true,
  },
  sender: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  attachments: {
    type: [String], // Array of file URLs
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Message = model("Message", MessageSchema);
