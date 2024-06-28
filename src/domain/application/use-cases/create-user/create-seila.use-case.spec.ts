import { makeSeiLa } from 'test/factories/make-seila.factory';
import { InMemorySeilaRepository } from 'test/repositories/in-memory-seila.repository';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';

import { InvalidIdError } from '../errors/invalid-id';
import { CreateSeiLaUseCase } from './create-seila.use-case';

let inMemorySeiLaRepository: InMemorySeilaRepository;

let sut: CreateSeiLaUseCase;
describe('[SeiLa] Create', () => {
  beforeEach(() => {
    inMemorySeiLaRepository = new InMemorySeilaRepository();
    sut = new CreateSeiLaUseCase(inMemorySeiLaRepository);
  });

  it('should be able to create a new seila', async () => {
    const newSeila = await makeSeiLa({ name: 'Brunão da Massa' });

    await inMemorySeiLaRepository.create(newSeila);

    expect(inMemorySeiLaRepository.items).toHaveLength(1);

    const result = await sut.execute(newSeila);

    expect(result).toBeTruthy();
    expect(result.seiLa.name).toEqual('Brunão da Massa');
    expect(result.seiLa.id.toString()).toHaveLength(21);
  });

  it('should be able to create a new seila with specific id', async () => {
    const newSeila = await makeSeiLa({ name: 'Brunão da Massa' }, new UniqueEntityID('id-1'));

    await inMemorySeiLaRepository.create(newSeila);

    expect(inMemorySeiLaRepository.items).toHaveLength(1);

    const result = await sut.execute(newSeila, newSeila.id);

    expect(result).toBeTruthy();
    expect(result.seiLa.name).toEqual('Brunão da Massa');
    expect(result.seiLa.id.toString()).toHaveLength(4);
    expect(result.seiLa.id.toString()).toEqual('id-1');
  });

  it('should not be able to create a seila with id bigger than 21 chacaracters', async () => {
    expect(async () => {
      await makeSeiLa(
        { name: 'Brunão da Massa' },
        new UniqueEntityID('id-12345678901012323243545644')
      );
    }).rejects.toThrowError(new InvalidIdError());
  });
});
