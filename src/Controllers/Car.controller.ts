import { Request, Response } from 'express';
import CarServices from '../Services/Car.service';

class CarController {
  constructor(private service = new CarServices()) {}

  createCar = async (req: Request, res: Response) => {
    const newCar = req.body;
    const result = await this.service.createCar(newCar);
    res.status(201).send(result);
  };
}

export default CarController;