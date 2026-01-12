// FILE: src/core/send-response.js

export const sendResponse = ({ res, success = true, message, statusCode = 200, data }) => {

    const response = {
        success,
        message
    }

    if (data) response.data = data

    return res.status(statusCode).json(response)
}