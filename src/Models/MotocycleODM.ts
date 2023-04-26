import { Schema } from 'mongoose';
import VehicleODM from './AbstractODM';
import IMotocicle from '../Interfaces/IMotorcycle';

class MotocycleODM extends VehicleODM<IMotocicle> {
  constructor() {
    const schema = new Schema<IMotocicle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { versionKey: false });
    super(schema, 'motocycles');
  }
}

export default MotocycleODM;