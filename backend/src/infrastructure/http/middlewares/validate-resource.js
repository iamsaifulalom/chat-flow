import { sendResponse } from "../../../core/send-response.js";

export const validateResource = (schema, key = "body") => (req, res, next) => {

    const result = schema.safeParse(req[key]);

    if (!result.success) {
        const issue = result.error.issues[0];
        const pathName = issue?.path?.[0] ?? "unknown";
        const message = issue?.message ?? "Invalid value";

        sendResponse({
            res,
            statusCode: 400,
            success: false,
            message: "Validation failed",
            data: `${pathName}: ${message}`
        })
    }

    req[key] = result.data;
    next();
};