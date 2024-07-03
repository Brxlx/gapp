import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/optional';
import { EmptyPasswordError } from '@/domain/application/use-cases/errors/empty-password';
import { TooShortPasswordError } from '@/domain/application/use-cases/errors/too-short-password';

import { Nickname } from './value-objects/nickname';

export interface UserProps {
  name: string;
  email: string;
  nickname: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get nickname() {
    return this.props.nickname;
  }

  get password() {
    return this.props.password;
  }

  set password(password: string) {
    if (!password) throw new EmptyPasswordError();
    if (password.length < 8) throw new TooShortPasswordError();
    this.props.password = password;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityID) {
    return new User(
      {
        ...props,
        nickname: Nickname.createFromText(props.nickname).value,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }
}
