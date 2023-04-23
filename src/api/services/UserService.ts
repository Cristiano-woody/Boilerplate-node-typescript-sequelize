import UserEntity from '../entity/UserEntity'
import { type Request } from 'express'

class UserService {
  //
  async create (req: Request): Promise<string> {
    const user = await UserEntity.create({
      name: `${req.body.name as string}`,
      age: parseInt(req.body.age),
      gender: `${req.body.gender as string}`
    })
    console.log()
    return JSON.stringify(user)
  }

  async getAll (): Promise<string> {
    const user = await UserEntity.findAll()
    return JSON.stringify(user)
  }

  async getById (req: Request): Promise<string> {
    const userID = parseInt(req.query.id as string)
    const user = await UserEntity.findAll({
      where: {
        id: userID
      }
    })
    return JSON.stringify(user)
  }

  async updateByID (req: Request): Promise<void> {
    const results = await UserEntity.findByPk(parseInt(req.body.id as string))
    if (results != null) {
      const user = results
      user.age = 100
      await user.save()
    }
  }

  async delete (req: Request): Promise<string> {
    const userID = parseInt(req.query.id as string)
    const user = await UserEntity.destroy({
      where: {
        id: userID
      }
    })
    return JSON.stringify(user)
  }
}

export default UserService
