import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/Controller/SessionController';
import UserController from './app/Controller/UserController';
import RecipientsController from './app/Controller/RecipientsController';
import DeliverymanController from './app/Controller/DeliverymanController';
import FileController from './app/Controller/FilesController';
import DeliveryController from './app/Controller/DeliveryController';
import DeliverymanAcessController from './app/Controller/DeliverymanAcessController';
import DeliveryProblemController from './app/Controller/DeliveryProblemController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// login
routes.post('/sessions', SessionController.store);

// Create Users
routes.post('/users', UserController.store);

// Routes for Deliverymans Acess only with ID in params
routes.get('/deliverymanacess/:id/delivery', DeliverymanAcessController.index);
routes.put(
    '/deliverymanacess/:id/delivery/:delivery_id',
    DeliverymanAcessController.update
);

// Router to deliveryman inform any problem
routes.post(
    '/deliverymanacess/:id/delivery/:delivery_id/problem',
    DeliveryProblemController.store
);

routes.get(
    '/deliverymanacess/:id/delivery/:delivery_id/problem',
    DeliveryProblemController.show
);

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

// delivery/orders
routes.post('/delivery', DeliveryController.store);
routes.get('/delivery', DeliveryController.index);
routes.get('/delivery/:id', DeliveryController.show);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);

// route to company list all deliveries with problema
routes.get('/problem', DeliveryProblemController.index);
routes.delete('/problem/:delivery_id', DeliveryProblemController.delete);
export default routes;
