import axios, { AxiosResponse } from 'axios'

export class ApiService {
  static apiUrl = 'https://api.github.com'

  protected static get<T>(resourceUrl: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${ApiService.apiUrl}/${resourceUrl}`)
  }
}
