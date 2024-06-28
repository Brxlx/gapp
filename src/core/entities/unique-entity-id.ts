import { nanoid } from 'nanoid';

export class UniqueEntityID {
  private value: string;

  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  private generateId(): string {
    return nanoid();
  }

  constructor(value?: string) {
    if (value && value?.length > 21) throw new Error('Invalid id size');
    this.value = value ?? this.generateId();
  }

  public equals(id: UniqueEntityID): boolean {
    return id.toValue() === this.value;
  }
}
