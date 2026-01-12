// FILE: src/app/register-error-handlers.js

import { errorBoundary } from "../infrastructure/http/middlewares/error-boundary.js";
import { notFoundHandler } from "../infrastructure/http/middlewares/not-found.js";

export function registerErrorHandlers(app) {
    app.use(notFoundHandler);   // <-- after all routes
    app.use(errorBoundary);     // <-- after all routes
}