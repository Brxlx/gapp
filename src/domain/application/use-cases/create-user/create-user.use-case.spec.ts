import { makeUser } from 'test/factories/make-user.factory';
import { InMemoryUsersRepository } from 'test/repositories/in-memory-user.repository';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';

import { InvalidIdError } from '../errors/invalid-id';
import { CreateUserUseCase } from './create-user.use-case';

let inMemoryUserRepository: InMemoryUsersRepository;

// System Under Test
let sut: CreateUserUseCase;

describe('[user] Test Suit', () => {
  suite('[Create] User', () => {
    beforeEach(() => {
      inMemoryUserRepository = new InMemoryUsersRepository();
      sut = new CreateUserUseCase(inMemoryUserRepository);
    });

    it('should be able to create a new User', async () => {
      const newUser = await makeUser({
        name: 'Brunão da Massa',
        email: 'brunaodamassa@gmail.com',
      });

      await inMemoryUserRepository.create(newUser);

      expect(inMemoryUserRepository.items).toHaveLength(1);

      const result = await sut.execute(newUser);

      expect(result).toBeUndefined();
      expect(newUser.name).toEqual('Brunão da Massa');
      expect(newUser.id.toString()).toHaveLength(21);
      expect(inMemoryUserRepository.items[0]).toMatchObject(newUser);
    });

    it('should be able to create a new User with specific id', async () => {
      const newUser = await makeUser({ name: 'Brunão da Massa' }, new UniqueEntityID('id-1'));

      await inMemoryUserRepository.create(newUser);

      expect(inMemoryUserRepository.items).toHaveLength(1);

      const result = await sut.execute(newUser, newUser.id);

      expect(result).toBeUndefined();
      expect(newUser.name).toEqual('Brunão da Massa');
      expect(newUser.id.toString()).toHaveLength(4);
      expect(newUser.id.toString()).toEqual('id-1');
    });

    it('should not be able to create a User with id bigger than 21 chacaracters', async () => {
      expect(async () => {
        await makeUser(
          { name: 'Brunão da Massa' },
          new UniqueEntityID('id-12345678901012323243545644')
        );
      }).rejects.toThrowError(new InvalidIdError());
    });
  });
});
