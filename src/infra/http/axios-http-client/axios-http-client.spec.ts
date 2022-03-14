import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostClientParams } from '@/data/protocols/http/http-post-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResponse = {
  data: faker.helpers.userCard(),
  status: faker.datatype.number(),
}
mockedAxios.post.mockResolvedValue(mockedAxiosResponse)

const makeSut = () => {
  return new AxiosHttpClient()
}

const mockPostRequestParams = (): HttpPostClientParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.userCard(),
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct values ', async () => {
    const requestParams = mockPostRequestParams()
    const sut = makeSut()
    await sut.post(requestParams)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      requestParams.url,
      requestParams.body
    )
  })

  test('should return correct statusCode and body ', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequestParams())

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data,
    })
  })
})
