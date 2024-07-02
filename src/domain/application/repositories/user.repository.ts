import { User } from '@/domain/enterprise/entities/user';

export abstract class UsersRepository {
  abstract create(seiLa: User): Promise<void>;
}
