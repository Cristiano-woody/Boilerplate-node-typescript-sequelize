import { type Request, type Response } from 'express'
import UserService from '../services/UserService'

const userService = new UserService()

class UserController {
  //
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
}

export default UserController
