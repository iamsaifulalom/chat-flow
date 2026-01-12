// FILE: src/modules/auth/auth.routes.js
import { Router } from 'express';
import {
    validateResource
} from '../../infrastructure/http/middlewares/validate-resource.js';
import { SignInSchema, SignUpSchema } from './auth.validator.js';
import { authController } from './auth.controller.js';

const routes = Router();

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