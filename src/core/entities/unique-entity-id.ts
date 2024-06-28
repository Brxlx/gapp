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
    this.value = value ?? this.generateId();
  }

  public equals(id: UniqueEntityID): boolean {
    return id.toValue() === this.value;
  }
}
