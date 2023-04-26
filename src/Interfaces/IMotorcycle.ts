import IVehicle from './IVehicle';

interface IMotocicle extends IVehicle {
  category: string;
  engineCapacity: number;
}

export default IMotocicle;