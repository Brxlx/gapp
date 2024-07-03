import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { User } from '@/domain/enterprise/entities/user';

import { UsersRepository } from '../../repositories/user.repository';

interface CreateUserRequest {
  name: string;
  email: string;
  nickname: string;
  password: string;
}

type CreateUserResponse = void;

// @Injectable()
export class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(
    { name, email, nickname, password }: CreateUserRequest,
    id?: UniqueEntityID
  ): Promise<CreateUserResponse> {
    const user = User.create({ name, email, nickname, password }, id);

    // To get into setter and validate/modificate data
    user.password = password;

    console.log(user);

    await this.usersRepository.create(user);
  }
}
