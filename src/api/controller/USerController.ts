import { type Request, type Response } from 'express'
import UserService from '../services/UserService'

const userService = new UserService()

class UserController {
  //
  async create (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.create(req)
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(400).send('requisićão inválida')
    }
  }

  async getAll (req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await userService.getAll()
      res.status(200).json(allUsers)
    } catch (error) {
      console.log(error)
      res.status(400).send('requisicão inválida')
    }
  }

  async getById (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getById(req)
      if (user !== undefined && user !== null) {
        res.status(200).json(user)
      } else {
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      res.status(400).send('requisicão inválida')
    }
  }

  async updateByID (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.updateByID(req)
      if (user !== undefined && user !== null) {
        res.status(200).json(user)
      } else {
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      res.status(400).send('requisicão inválida')
    }
  }

  async deleteByID (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.deleteByID(req)
      if (user !== undefined && user !== null) {
        res.status(200).json(`Usuário: ${user.name} deletado.`)
      } else {
        res.status(400).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      res.status(400).json('requisicão inválida')
    }
  }
}

export default UserController
