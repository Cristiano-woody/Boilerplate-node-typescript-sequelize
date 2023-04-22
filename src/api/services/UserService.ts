import UserEntity from '../entity/UserEntity'
import { type Request } from 'express'

class UserService {
  //
  async getAll (): Promise<string> {
    const user = await UserEntity.findAll()
    return JSON.stringify(user)
  }

  async getById (req: Request): Promise<string> {
    const user = await UserEntity.findAll({
      where: {
        id: req.body.id
      }
    })
    return JSON.stringify(user)
  }
}

export default UserService
