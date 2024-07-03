import { User } from '@/domain/enterprise/entities/user';

export abstract class UsersRepository {
  abstract findByNickname(nickname: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
}
