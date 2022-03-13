/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface HttpPostClient {
  post(url: string): Promise<void>
}
