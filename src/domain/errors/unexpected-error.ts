export class UnexpectedError extends Error {
  constructor() {
    super('ocorreu um erro inesperado. Tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
