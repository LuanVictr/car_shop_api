import MotocycleService from '../Services/motocycle.service';

class MotocycleController {
  constructor(private services = new MotocycleService()) {}
}