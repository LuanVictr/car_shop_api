import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarServices {
  /*  static createDomainCar(car:ICar) {
    const
  } */

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
}

export default CarServices;