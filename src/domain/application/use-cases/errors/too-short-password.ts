export class TooShortPasswordError extends Error {
  constructor() {
    super('Too short password');
  }
}
