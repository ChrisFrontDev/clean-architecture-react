import { AccountModel } from 'domain/models/account-model'

type AuthenticationParams = {
  email: string
  password: string
}

export type Authentication = {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
