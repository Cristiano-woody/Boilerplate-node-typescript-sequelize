import { type Request, type Response } from 'express'
import UserService from '../services/UserService'

const userService = new UserService()

class UserController {
  //
  async create (req: Request, res: Response): Promise<any> {
    try {
      const user = await userService.create(req)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).send('requisićão inválida')
    }
  }

  async getAll (req: Request, res: Response): Promise<any> {
    try {
      const allUsers = await userService.getAll()
      res.status(200).json(allUsers)
    } catch (error) {
      res.status(400).send('requisicão inválida')
    }
  }

  async getById (req: Request, res: Response): Promise<any> {
    try {
      const user = await userService.getById(req)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).send('requisicão inválida')
    }
  }

  async updateByID (req: Request, res: Response): Promise<any> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const user = await userService.updateByID(req)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).send('requisicão inválida')
    }
  }

  async delete (req: Request, res: Response): Promise<any> {
    try {
      const user = await userService.delete(req)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json('requisicão inválida')
    }
  }
}

export default UserController
