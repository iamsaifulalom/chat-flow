import { Router } from 'express';
import { requireAuth } from '../../infrastructure/http/middlewares/require-auth';
import { ChatController } from './chat.controller';
import { validateResource } from '../../infrastructure/http/middlewares/validate-resource';
import { idParam } from '../../lib/validators/common.fields';

const routes = Router()

routes.get(
    "/chat/:id",
    validateResource(idParam, "params"),
    requireAuth,
    ChatController.getChatHistoryById
)

export default routes