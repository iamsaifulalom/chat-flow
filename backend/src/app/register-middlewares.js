// FILE: src/app/register-middlewares.js

import express from 'express';

export function registerMiddlewares(app) {

    app.use(express.json());
    app.disable("x-powered-by");
}