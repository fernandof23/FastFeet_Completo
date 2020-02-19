import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/Controller/SessionController';
import UserController from './app/Controller/UserController';
import RecipientsController from './app/Controller/RecipientsController';
import DeliverymanController from './app/Controller/DeliverymanController';
import FileController from './app/Controller/FilesController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// login
routes.post('/sessions', SessionController.store);

// Create Users
routes.post('/users', UserController.store);

// Routes with authenticate
routes.use(authMiddlewares);

routes.put('/users/', UserController.update);

// Recipients
routes.post('/recipients', RecipientsController.store);
routes.get('/recipients', RecipientsController.index);
routes.get('/recipients/:id', RecipientsController.show);
routes.put('/recipients/:id', RecipientsController.update);
routes.delete('/recipients/:id', RecipientsController.delete);

//
routes.post('/files', upload.single('file'), FileController.store);

// deliveryman
routes.post('/deliveryman', DeliverymanController.store);
routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.show);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

export default routes;
