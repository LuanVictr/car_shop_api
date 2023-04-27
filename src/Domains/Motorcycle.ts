import IMotocicle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;
  constructor(motoCicle: IMotocicle) {
    super(motoCicle);
    this.category = motoCicle.category;
    this.engineCapacity = motoCicle.engineCapacity;
  }
  
  getCategory() {
    return this.category;
  }
  
  setCategory(value:string) {
    this.category = value;
  }
  
  getEngineCapacity() {
    return this.engineCapacity;
  }
  
  setEngineCapacity(value:number) {
    this.engineCapacity = value;
  }
}
  
export default Motorcycle;