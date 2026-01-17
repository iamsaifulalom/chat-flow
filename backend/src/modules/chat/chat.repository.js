import { Chat, Message } from "./chat.model.js"

export const chatRepository = {
    findOpenedChatByUserId: async (id) => {
        return Chat.findOne({ userId: id, status: "open" });
    },
    createChatWithUserId: (id) => {
        return Chat.create({ userId: id })
    },

    findChatHistoryByChatId: async (id) => {
        const messages = await Message.find({ chatId: id })
        if (!messages) return [];
        return messages
    },

    addMessage: async ({ chatId, contents , role}) => {
        console.log("Adding message to chat:", chatId);
        return await Message.create({ chatId , contents , role })
    }
}