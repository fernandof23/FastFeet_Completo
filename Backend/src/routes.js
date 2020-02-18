import { Router } from 'express';

import SessionController from './app/Controller/SessionController';
import UserController from './app/Controller/UserController';
import RecipientsController from './app/Controller/RecipientsController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

// login
routes.post('/sessions', SessionController.store);

// Create Users
routes.post('/users', UserController.store);

// Routes with authenticate
routes.use(authMiddlewares);

routes.put('/users/', UserController.update);

// Recipients
routes.post('/recipients', RecipientsController.store);

export default routes;
