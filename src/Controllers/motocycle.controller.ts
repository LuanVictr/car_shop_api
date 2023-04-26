import { Request, Response } from 'express';
import MotocycleService from '../Services/motocycle.service';

class MotocycleController {
  constructor(private services = new MotocycleService()) {}

  createMotorcycle = async (req: Request, res: Response) => {
    try {
      const motocycle = req.body;
      const result = await this.services.createMotocycle(motocycle);
      res.status(201).send(result);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };

  getAllMotorcycles = async (_req: Request, res: Response) => {
    const result = await this.services.getAllMotocicles();
    res.status(200).send(result);
  };

  getMotocycleById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.services.getMotocycleById(id);
      res.status(200).send(result);
    } catch (error:any) {
      res.status(error.status).json({ message: error.message });
    }
  };
}

export default MotocycleController;