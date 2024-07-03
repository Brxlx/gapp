import { UsersRepository } from '@/domain/application/repositories/user.repository';
import { User } from '@/domain/enterprise/entities/User';

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async findByNickname(nickname: string): Promise<User | null> {
    const user = this.items.find(user => user.nickname === nickname);
    if (!user) return null;

    return user;
  }

  async create(user: User): Promise<void> {
    this.items.push(user);
  }
}
