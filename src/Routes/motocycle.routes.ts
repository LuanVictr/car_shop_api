import { Router } from 'express';
import MotocycleController from '../Controllers/motocycle.controller';

const routes = Router();
const motorcycleController = new MotocycleController();

routes.post('/motorcycles', motorcycleController.createMotorcycle);

export default routes;