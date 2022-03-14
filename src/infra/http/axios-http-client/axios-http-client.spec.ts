import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostClientParams } from '@/data/protocols/http/http-post-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () => {
  return new AxiosHttpClient()
}

const mockPostRequestParams = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.userCard(),
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb ', async () => {
    const requestParams = mockPostRequestParams()
    const sut = makeSut()
    await sut.post(requestParams)

    expect(mockedAxios.post).toHaveBeenCalledWith(requestParams.url)
  })
})
