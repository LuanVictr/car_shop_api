import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const routes = Router();
const carController = new CarController();

routes.post('/cars', carController.createCar);
routes.get('/cars', carController.getAllCars);
routes.get('/cars/:id', carController.getCarById);
routes.put('/cars/:id', carController.getCarByIdAndUpdate);

export default routes;