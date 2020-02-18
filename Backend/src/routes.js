import { Router } from 'express';

import SessionController from './app/Controller/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

export default routes;
