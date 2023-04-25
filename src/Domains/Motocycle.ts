import IMotocicle from '../Interfaces/IMotocicle';

class MotoCicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  protected category: string;
  protected engineCapacity: number;
  constructor(motoCicle: IMotocicle) {
    this.model = motoCicle.model;
    this.year = motoCicle.year;
    this.color = motoCicle.color;
    this.status = motoCicle.status;
    this.buyValue = motoCicle.buyValue;
    this.category = motoCicle.category;
    this.engineCapacity = motoCicle.engineCapacity;
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
  
export default MotoCicle;