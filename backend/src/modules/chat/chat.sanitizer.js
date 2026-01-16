export function sanitizer(data) {
    if(!data) return null
    const { _id, ...rest } = data.toObject();
    return { id: _id, ...rest }
}

export function sanitizeChat(data) {
    const { messages  , ...rest } = sanitizer(data);
    const hasMessages = messages.length > 0;

    if (hasMessages) {
        messages = messages.map(sanitizer)
    }
    return { messages, ...rest }
}