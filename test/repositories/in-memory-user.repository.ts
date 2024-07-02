import { UsersRepository } from '@/domain/application/repositories/user.repository';
import { User } from '@/domain/enterprise/entities/User';

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(User: User): Promise<void> {
    this.items.push(User);
  }
}
