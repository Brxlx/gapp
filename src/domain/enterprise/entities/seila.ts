import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/optional';

export interface SeiLaProps {
  name: string;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class SeiLa extends Entity<SeiLaProps> {
  get name() {
    return this.props.name;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(props: Optional<SeiLaProps, 'createdAt'>, id?: UniqueEntityID) {
    return new SeiLa(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
  }
}
