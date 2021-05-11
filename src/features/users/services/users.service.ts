import { ApiService } from '../../../core/services/api.service'
import { User } from '../models/user.model'

export class UsersService extends ApiService {
  public static async getAllUsers(): Promise<User[]> {
    try {
      const res = await super.get<User[]>('users?per_page=5')
      return new Promise((resolve, reject) => {
        resolve(res.data)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }

  public static async getUserByUsername(username: string): Promise<User> {
    try {
      const res = await super.get<User>(`users/${username}`)
      return new Promise((resolve, reject) => {
        resolve(res.data)
      })
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
}
