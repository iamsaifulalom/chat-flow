// FILE: src/modules/auth/auth.routes.js
import { Router } from 'express';
import {
    validateResource
} from '../../infrastructure/http/middlewares/validate-resource.js';
import { SignUpSchema } from './auth.validator.js';
import { authController } from './auth.controller.js';

const routes = Router();

routes.post(
    "/signup", 
    validateResource(SignUpSchema),
    authController.registerUser
)

export default routes