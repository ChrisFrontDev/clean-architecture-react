import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/test/mock-axios'
import axios from 'axios'
import { mockPostRequestParams } from '@/data/test/mock-http-post'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct values ', async () => {
    const requestParams = mockPostRequestParams()
    const { sut, mockedAxios } = makeSut()
    await sut.post(requestParams)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      requestParams.url,
      requestParams.body
    )
  })

  test('should return correct statusCode and body ', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequestParams())

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
