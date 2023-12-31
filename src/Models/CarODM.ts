import { Schema } from 'mongoose';
import VehicleODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

class CarODM extends VehicleODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { versionKey: false });
    super(schema, 'cars');
  }
}

export default CarODM;