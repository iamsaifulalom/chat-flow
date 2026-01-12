// modules/user/user.sanitizer.js
export const sanitizeUser = (user) => {
    const {
        _id,
        password,
        orders,
        address,
        chats,
        createdAt,
        updatedAt,
        ...safeUser
    } = user.toObject();

    return { id: _id, ...safeUser };
};