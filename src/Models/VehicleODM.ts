import { Model, Schema, models, model, UpdateQuery } from 'mongoose';

class VehicleODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async create(vehicle: T):Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id:string) {
    return this.model.find({ _id: id });
  }

  public async findByIdAndUpdate(id:string, vehicle: Partial<T>):Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...vehicle } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default VehicleODM;