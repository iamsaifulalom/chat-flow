import { Router } from 'express';
import { requireAuth } from '../../infrastructure/http/middlewares/require-auth.js';
import { ChatController } from './chat.controller.js';
import { validateResource } from '../../infrastructure/http/middlewares/validate-resource.js';
import { idParam } from '../../lib/validators/common.fields.js';

const routes = Router()

/**
 * @description get chat history by user id.
 * not chat id.
 */

routes.get(
    "/active",
    requireAuth(),
    ChatController.getChatHistory
)

export default routes