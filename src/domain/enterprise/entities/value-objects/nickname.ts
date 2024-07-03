import { ValueObject } from '@/core/entities/value-object';

export interface NicknameProps {
  nickname: string;
}

export class Nickname extends ValueObject<NicknameProps> {
  get value() {
    return this.props.nickname;
  }

  static create(nickname: string) {
    return new Nickname({ nickname });
  }

  static createFromText(text: string): Nickname {
    const nickname = text.normalize('NFKD').toLowerCase().trim();
    // .replace(/\s+/g, '-')
    // .replace(/[^\w-]+/g, '')
    // .replace(/_/g, '-')
    // .replace(/--+/g, '-')
    // .replace(/-$/g, '');

    return new Nickname({ nickname });
  }
}
