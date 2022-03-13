/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type HttpPostClientParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post(params: HttpPostClientParams): Promise<void>
}
