import { AccountModel } from 'domain/models/account-model'
import { UnexpectedError } from './../../../domain/errors/unexpected-error'
import { InvalidCredentialsError } from './../../../domain/errors/invalid-credentials-error'
import {
  Authentication,
  AuthenticationParams,
} from '@/domain/usecases/authentication'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()

      case HttpStatusCode.ok:
        return httpResponse.body

      default:
        throw new UnexpectedError()
    }
  }
}
