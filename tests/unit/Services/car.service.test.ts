import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarServices from '../../../src/Services/Car.service';
import Car from '../../../src/Domains/Car';

describe('testa a camada service', function () {
  afterEach(function () {
    Sinon.restore();
  });
  it('deve ser possível cadastrar um carro com sucesso', async function () {
    const carInput = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    Sinon.stub(Model, 'create').resolves(carOutput);
    
    const service = new CarServices();
    const result = await service.createCar(carInput);
    expect(result).to.be.deep.equal(carOutput);
  });
  it('deve ser impossivel buscar um carro com a chave id errada', async function () {
    const carOutput = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    Sinon.stub(Model, 'findById').resolves([carOutput]);
    try { 
      const service = new CarServices();
      const result = await service.getCarById('chave invalida');
      expect(result).to.be.deep.equal({ message: 'Invalid mongo id' });
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  /* it('deve ser impossivel buscar um carro com a chave id inexistente', async function () {
    Sinon.stub(Model, 'findById').resolves(undefined);
    try { 
      const service = new CarServices();
      const result = await service.getCarById('6449593a5782633a8966a43f');
      expect(result).to.be.deep.equal({ message: 'Car not found' });
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  }); */
  
  it('Pegando uma lista de carros com SUCESSO', async function () {
    const carOutput: Car = new Car({
      id: '64484c4f3a1ed52ac6a52704',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });
    Sinon.stub(Model, 'find').resolves([carOutput]);

    const service = new CarServices();
    const result = await service.getCars();

    expect(result).to.be.deep.equal([carOutput]);
  });
});