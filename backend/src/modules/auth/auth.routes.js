import { Router } from 'express';
import {
    validateResource
} from '../../infrastructure/http/middlewares/validate-resource.js';
import { signUpSchema } from './auth.validator.js';

const routes = Router();

routes.post("/signup", validateResource(signUpSchema), async (req, res, next) => {
    try {
        console.log(req.body)
        res.send("server working")
    } catch (error) {

    }
})

export default routes