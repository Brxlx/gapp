export class EmptyPasswordError extends Error {
  constructor() {
    super('Empty password');
  }
}
