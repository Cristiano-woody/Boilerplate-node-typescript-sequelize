import userEntity from '../entitys/userEntity'
import { type Request } from 'express'
import type UserInterface from '../interfaces/userInterface'

class UserService {
  //
  async createUser (body: UserInterface): Promise<UserInterface> {
    const user = await userEntity.create({
      name: `${body.name}`,
      age: body.age,
      gender: `${body.gender}`
    })
    return user
  }

  async getAllUsers (): Promise<UserInterface[]> {
    const allUsers = await userEntity.findAll()
    return allUsers
  }

  async getUserById (req: Request): Promise<UserInterface | undefined | null> {
    const user = await userEntity.findByPk(parseInt(req.query.id as string))
    return user
  }

  async updateUserByID (req: Request): Promise<UserInterface | undefined> {
    const results = await userEntity.findByPk(parseInt(req.query.id as string))
    if (results !== null && results !== undefined) {
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

  async deleteUserByID (req: Request): Promise<UserInterface | undefined | null> {
    const user = await userEntity.findByPk(parseInt(req.query.id as string))
    if (user !== undefined && user !== null) {
      await userEntity.destroy({
        where: {
          id: user.id
        }
      })
      return user
    }
  }
}

export default UserService
