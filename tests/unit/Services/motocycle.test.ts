import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import MotocycleService from '../../../src/Services/motocycle.service';
import Motorcycle from '../../../src/Domains/Motorcycle';

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
  it('Deve ser possivel buscar todas as motos com sucesso', async function () {
    const motoOutput = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: motoName,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30000,
      category: 'Street',
      engineCapacity: 600,
    });
    Sinon.stub(Model, 'find').resolves([motoOutput]);
    const service = new MotocycleService();
    const result = await service.getAllMotocicles();
    expect(result).to.be.deep.equal([motoOutput]);
  });
});