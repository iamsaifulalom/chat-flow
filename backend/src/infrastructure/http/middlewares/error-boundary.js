import { AppError } from "../../../core/app-error.js";
import { sendResponse } from "../../../core/send-response.js";

export function errorBoundary(err, req, res, _next) {

  // If it's an AppError, use its status & message
  if (err instanceof AppError) {
    sendResponse({
      res,
      statusCode: err.statusCode,
      success: false,
      message: err.message
    })
  }

  // For unexpected errors
  console.error("UNHANDLED ERROR →", err);

  sendResponse({
    res,
    statusCode: 500,
    success: false,
    message: "Internal Server Error",
  })
}