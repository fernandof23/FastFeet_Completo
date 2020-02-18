import { Router } from 'express';

import SessionController from './app/Controller/SessionController';
import UserController from './app/Controller/UserController';

const routes = new Router();

// login
routes.post('/sessions', SessionController.store);

// Create Users
routes.post('/users', UserController.store);

export default routes;
