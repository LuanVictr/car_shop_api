import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  
  constructor(vehicle:IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }

  getModel() {
    return this.model;
  }

  setModel(value:string) {
    this.model = value;
  }
  
  getYear() {
    return this.year;
  }

  setYear(value:number) {
    this.year = value;
  }

  getColor() {
    return this.color;
  }

  setColor(value:string) {
    this.color = value;
  }

  getStatus() {
    return this.status;
  }

  setStatus(value:boolean) {
    this.status = value;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setBuyValue(value:number) {
    this.buyValue = value;
  }
}

export default Vehicle;