import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/http-response'

import {
  HttpPostClient,
  HttpPostClientParams,
} from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy<ReqBodyType, ResponseBodyType>
  implements HttpPostClient<ReqBodyType, ResponseBodyType>
{
  url?: string
  body?: ReqBodyType
  response: HttpResponse<ResponseBodyType> = {
    statusCode: HttpStatusCode.ok,
  }

  async post(
    params: HttpPostClientParams<ReqBodyType>
  ): Promise<HttpResponse<ResponseBodyType>> {
    this.url = params.url
    this.body = params.body

    return Promise.resolve(this.response)
  }
}
