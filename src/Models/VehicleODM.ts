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

  public async findById(id:number) {
    return this.model.find({ id });
  }

  public async findByIdAndUpdate(id:number, vehicle: Partial<T>):Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { id },
      { ...vehicle } as UpdateQuery<T>,
      { new: true },
    );
  }
}

export default VehicleODM;