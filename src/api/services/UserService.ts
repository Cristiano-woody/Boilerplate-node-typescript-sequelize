import UserEntity from '../entity/UserEntity'
import { type Request } from 'express'
import type UserInterface from '../interface/userInterface'

class UserService {
  //
  async create (req: Request): Promise<UserInterface> {
    const user = await UserEntity.create({
      name: `${req.body.name as string}`,
      age: parseInt(req.body.age),
      gender: `${req.body.gender as string}`
    })
    return user
  }

  async getAll (): Promise<UserInterface[]> {
    const user = await UserEntity.findAll()
    return user
  }

  async getById (req: Request): Promise<UserInterface | undefined> {
    const user = await UserEntity.findByPk(parseInt(req.query.id as string))
    if (user != null) {
      return user
    }
  }

  async updateByID (req: Request): Promise<UserInterface | undefined> {
    const results = await UserEntity.findByPk(parseInt(req.body.id as string))
    if (results != null) {
      const user = results
      if (req.body.name !== undefined) {
        user.name = req.body.name
      }
      if (req.body.age !== undefined) {
        user.age = req.body.age
      }
      if (req.body.gender !== undefined) {
        user.gender = req.body.gender
      }

      if (req.body.name !== undefined || req.body.age !== undefined || req.body.gender !== undefined) {
        await user.save()
        return user
      }
    }
  }

  async deleteByID (req: Request): Promise<UserInterface | undefined | null> {
    const user = await UserEntity.findByPk(parseInt(req.query.id as string))
    if (user !== undefined && user !== null) {
      await UserEntity.destroy({
        where: {
          id: user.id
        }
      })
      return user
    }
  }
}

export default UserService
