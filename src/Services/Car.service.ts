import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarServices {
  static async checkId(id:string) {
    const carODM = new CarODM();
    const isValid = isValidObjectId(id);
    if (!isValid) {
      throw Object.assign(new Error('Invalid mongo id'), { status: 422 });
    }
    const carWithoudId = await carODM.findById(id);
    if (carWithoudId.length === 0) {
      throw Object.assign(new Error('Car not found'), { status: 404 });
    }
  }

  async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    if (!car.status) {
      return {
        id: newCar.id,
        model: newCar.model,
        year: newCar.year,
        color: newCar.color,
        status: false,
        buyValue: newCar.buyValue,
        doorsQty: newCar.doorsQty,
        seatsQty: newCar.seatsQty,
      };
    }
    return {
      id: newCar.id,
      model: newCar.model,
      year: newCar.year,
      color: newCar.color,
      status: newCar.status,
      buyValue: newCar.buyValue,
      doorsQty: newCar.doorsQty,
      seatsQty: newCar.seatsQty,
    };
  }

  async getCars():Promise<ICar[]> {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    const result = cars.map((car) => ({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    }));
    return result;
  }

  async getCarById(id:string) {
    const carODM = new CarODM();
    await CarServices.checkId(id);
    const carWithoudId = await carODM.findById(id);
    const [carWithId] = carWithoudId.map((cars) => ({
      id: cars.id,
      model: cars.model,
      year: cars.year,
      color: cars.color,
      status: cars.status,
      buyValue: cars.buyValue,
      doorsQty: cars.doorsQty,
      seatsQty: cars.seatsQty,
    }));
    return carWithId;
  }

  async updateCarById(id:string, newCarInfo:ICar) {
    const carODM = new CarODM();
    await CarServices.checkId(id);
    const carUpdated = await carODM.findByIdAndUpdate(id, newCarInfo);
    if (carUpdated) {
      return {
        id: carUpdated.id,
        model: carUpdated.model,
        year: carUpdated.year,
        color: carUpdated.color,
        status: carUpdated.status,
        buyValue: carUpdated.buyValue,
        doorsQty: carUpdated.doorsQty,
        seatsQty: carUpdated.seatsQty,
      };
    } 
    return null;
  }
}

export default CarServices;