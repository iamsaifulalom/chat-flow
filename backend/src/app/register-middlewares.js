import express from 'express';

export function registerMiddlewares(app) {
    app.use(express.json());
}