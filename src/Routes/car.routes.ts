import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const routes = Router();
const carController = new CarController();

routes.post('/cars', carController.createCar);

export default routes;