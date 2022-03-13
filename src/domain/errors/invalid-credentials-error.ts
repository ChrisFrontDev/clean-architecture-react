export class InvalidCredentialsError extends Error {
  constructor() {
    super('credenciais invalidas')
    this.name = 'InvalidCredentialError'
  }
}
