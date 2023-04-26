import { Request, Response } from 'express';
import CarServices from '../Services/Car.service';

class CarController {
  constructor(private service = new CarServices()) {}

  createCar = async (req: Request, res: Response) => {
    const newCar = req.body;
    const result = await this.service.createCar(newCar);
    res.status(201).send(result);
  };

  getAllCars = async (_req: Request, res: Response) => {
    const result = await this.service.getCars();
    res.status(200).send(result);
  };

  getCarById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.service.getCarById(id);
      res.status(200).send(result);
    } catch (error:any) {
      res.status(error.status).json({ message: error.message });
    }
  };
}

export default CarController;