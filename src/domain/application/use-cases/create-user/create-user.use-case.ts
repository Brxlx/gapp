import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { User } from '@/domain/enterprise/entities/user';

import { UsersRepository } from '../../repositories/user.repository';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

type CreateUserResponse = void;

// @Injectable()
export class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(
    { name, email, password }: CreateUserRequest,
    id?: UniqueEntityID
  ): Promise<CreateUserResponse> {
    const user = User.create({ name, email, password }, id);

    await this.usersRepository.create(user);
  }
}
