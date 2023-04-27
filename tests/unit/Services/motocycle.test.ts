import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import MotocycleService from '../../../src/Services/motocycle.service';

describe('testa a camada service motos', function () {
  const motoName = 'Honda cb 600f Hornet';
  afterEach(function () {
    Sinon.restore();
  });
  it('deve ser possível cadastrar uma moto com sucesso', async function () {
    const motoInput = {
      model: motoName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motoOutput = {
      id: '6348513f34c397abcad040b2',
      model: motoName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 600,
    };
      
    Sinon.stub(Model, 'create').resolves(motoOutput);
    
    const service = new MotocycleService();
    const result = await service.createMotocycle(motoInput);
    expect(result).to.be.deep.equal(motoOutput);
  });
  it('deve ser impossivel buscar uma moto com a chave id errada', async function () {
    const motoOutput = {
      id: '6348513f34c397abcad040b2',
      model: motoName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 600,
    };
    Sinon.stub(Model, 'findById').resolves([motoOutput]);
    try {
      const service = new MotocycleService();
      const result = await service.getMotocycleById('chave invalida');
      expect(result).to.be.deep.equal({ message: 'Invalid mongo id' });
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  it('deve ser impossivel buscar uma moto que não existe', async function () {
    /* const motoOutput = {
      id: '6348513f34c397abcad040b2',
      model: motoName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 600,
    }; */
    Sinon.stub(Model, 'findById').resolves([]);
    try {
      const service = new MotocycleService();
      const result = await service.getMotocycleById('1111222233330000ffffcccc');
      expect(result).to.be.deep.equal({ message: 'Motorcycle not found' });
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });
});