import { InMemorySeilaRepository } from 'test/in-memory-seila.repository';

import { CreateSeiLaUseCase } from './create-seila.use-case';

let inMemorySeiLaRepository: InMemorySeilaRepository;

let sut: CreateSeiLaUseCase;
describe('Create Sei lá', () => {
  beforeEach(() => {
    inMemorySeiLaRepository = new InMemorySeilaRepository();
    sut = new CreateSeiLaUseCase(inMemorySeiLaRepository);
  });

  it('should be able to create a new seila', async () => {
    const result = await sut.execute({
      name: 'Brunão da Massa',
    });

    expect(result).toBeTruthy();
    expect(result.seiLa.name).toEqual('Brunão da Massa');
  });
});
