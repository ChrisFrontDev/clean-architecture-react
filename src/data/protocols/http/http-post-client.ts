/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { HttpResponse } from './http-response'

export type HttpPostClientParams<ReqBodyType> = {
  url: string
  body?: ReqBodyType
}

export interface HttpPostClient<ReqBodyType, ResponseBodyType> {
  post(
    params: HttpPostClientParams<ReqBodyType>
  ): Promise<HttpResponse<ResponseBodyType>>
}
