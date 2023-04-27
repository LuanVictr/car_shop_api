import { isValidObjectId } from 'mongoose';
import IMotocicle from '../Interfaces/IMotorcycle';
import MotocycleODM from '../Models/MotocycleODM';

class MotocycleService {
  static async checkId(id:string) {
    const motocyclesODM = new MotocycleODM();
    const isValid = isValidObjectId(id);
    if (!isValid) {
      throw Object.assign(new Error('Invalid mongo id'), { status: 422 });
    }
    const motorcycle = await motocyclesODM.findById(id);
    if (motorcycle.length === 0) {
      throw Object.assign(new Error('Motorcycle not found'), { status: 404 });
    }
  }

  async getAllMotocicles() {
    const motocyclesODM = new MotocycleODM();
    const MotorcyclesWithoudId = await motocyclesODM.findAll();
    const MotorcyclesWithId = MotorcyclesWithoudId.map((motorcycle) => ({
      id: motorcycle.id,
      model: motorcycle.model,
      year: motorcycle.year,
      color: motorcycle.color,
      status: motorcycle.status,
      buyValue: motorcycle.buyValue,
      category: motorcycle.category,
      engineCapacity: motorcycle.engineCapacity,
    }));
    return MotorcyclesWithId;
  }

  async createMotocycle(motocycle:IMotocicle) {
    const motocyclesODM = new MotocycleODM();
    const result = await motocyclesODM.create(motocycle);
    if (!motocycle.status) {
      return {
        id: result.id,
        model: result.model,
        year: result.year,
        color: result.color,
        status: false,
        buyValue: result.buyValue,
        category: result.category,
        engineCapacity: result.engineCapacity,
      };
    }
    return {
      id: result.id,
      model: result.model,
      year: result.year,
      color: result.color,
      status: result.status,
      buyValue: result.buyValue,
      category: result.category,
      engineCapacity: result.engineCapacity,
    };
  }

  async getMotocycleById(id:string) {
    const motocyclesODM = new MotocycleODM();
    await MotocycleService.checkId(id);
    const motocycleWithoutId = await motocyclesODM.findById(id);
    const [motocycleWithId] = motocycleWithoutId.map((moto) => ({
      id: moto.id,
      model: moto.model,
      year: moto.year,
      color: moto.color,
      status: moto.status,
      buyValue: moto.buyValue,
      category: moto.category,
      engineCapacity: moto.engineCapacity,
    }));
    return motocycleWithId;
  }

  async getMotorcycleByIdAndUpdate(id:string, newInfo: IMotocicle) {
    const motorcycleODM = new MotocycleODM();
    await MotocycleService.checkId(id);
    const result = await motorcycleODM.findByIdAndUpdate(id, newInfo);
    if (result) {
      return {
        id: result.id,
        model: result.model,
        year: result.year,
        color: result.color,
        status: result.status,
        buyValue: result.buyValue,
        category: result.category,
        engineCapacity: result.engineCapacity,
      };
    }
  }
}

export default MotocycleService;