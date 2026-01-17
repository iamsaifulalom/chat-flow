import { verifyAccessToken } from "../../../modules/auth/auth.tokens.js";

export function socketRequireAuth(socket, next) {
    const token = socket.handshake.auth.accessToken;
    if (!token) return next(new Error("Unauthorized"));

    try {
        socket.user = verifyAccessToken(token);
        next();
    } catch {
        next(new Error("Invalid token"));
    }
}