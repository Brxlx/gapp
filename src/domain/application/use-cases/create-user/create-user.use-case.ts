import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { User } from '@/domain/enterprise/entities/user';

import { UsersRepository } from '../../repositories/user.repository';

interface CreateSeiLaRequest {
  name: string;
  email: string;
  password: string;
}

type CreateSeiLaResponse = void;

// @Injectable()
export class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async execute(
    { name, email, password }: CreateSeiLaRequest,
    id?: UniqueEntityID
  ): Promise<CreateSeiLaResponse> {
    const user = User.create({ name, email, password }, id);

    await this.usersRepository.create(user);
  }
}
