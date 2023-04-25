import IVehicle from './IVehicles';

interface IMotocicle extends IVehicle {
  category: string;
  engineCapacity: number;
}

export default IMotocicle;