import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients', RecipientsController.update);


routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
