/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { HttpResponse } from './http-response'

export type HttpPostClientParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post(params: HttpPostClientParams): Promise<HttpResponse>
}
