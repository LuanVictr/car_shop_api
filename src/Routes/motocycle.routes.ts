import { Router } from 'express';
import MotocycleController from '../Controllers/motocycle.controller';

const routes = Router();
const motorcycleController = new MotocycleController();

routes.post('/motorcycles', motorcycleController.createMotorcycle);
routes.get('/motorcycles', motorcycleController.getAllMotorcycles);
routes.get('/motorcycles/:id', motorcycleController.getMotocycleById);

export default routes;