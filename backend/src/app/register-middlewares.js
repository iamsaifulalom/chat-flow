// FILE: src/app/register-middlewares.js

import express from 'express';
import cors from 'cors';

export function registerMiddlewares(app) {

    app.use(express.json());
    app.disable("x-powered-by");
    app.use(cors({ origin: "*" }));
}