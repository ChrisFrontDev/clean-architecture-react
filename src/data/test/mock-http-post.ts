import { faker } from '@faker-js/faker'
import { HttpPostClientParams } from '@/data/protocols/http/http-post-client'

export const mockPostRequestParams = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.userCard(),
})
