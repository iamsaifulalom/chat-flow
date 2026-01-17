// FILE: src/modules/auth/auth.routes.js
import { Router } from 'express';
import {
    validateResource
} from '../../infrastructure/http/middlewares/validate-resource.js';
import { SignInSchema, SignUpSchema } from './auth.validator.js';
import { authController } from './auth.controller.js';
import { requireAuth } from '../../infrastructure/http/middlewares/require-auth.js';

const routes = Router();

routes.get(
    "/me", 
    requireAuth(),
    authController.getProfile
)

routes.post(
    "/signup", 
    validateResource(SignUpSchema),
    authController.registerUser
)

routes.post(
    "/signin", 
    validateResource(SignInSchema),
    authController.signIn
)

export default routes