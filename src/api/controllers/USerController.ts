import { type Request, type Response } from 'express'
import UserService from '../services/UserService'
import LogService from '../services/LogService'

const userService = new UserService()

const logService = new LogService()

class UserController {
  //
  async createUser (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.createUser(req.body)
      void logService.creteLog(`create user: ${JSON.stringify(user)}`, req)
      res.status(201).json(user)
    } catch (error) {
      console.log(error)
      void logService.creteLog('createUser: erro na requisição', req)
      res.status(400).send('requisićão inválida')
    }
  }

  async getAllUsers (req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await userService.getAllUsers()
      void logService.creteLog('get all users ', req)
      res.status(200).json(allUsers)
    } catch (error) {
      console.log(error)
      void logService.creteLog('getAll: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async getUserById (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUserById(req)
      if (user !== undefined && user !== null) {
        void logService.creteLog(`get user by id: ${JSON.stringify(user)}`, req)
        res.status(200).json(user)
      } else {
        void logService.creteLog('getByID: usuario não encontrado', req)
        res.status(404).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      void logService.creteLog('getByID: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async updateUserByID (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.updateUserByID(req)
      if (user !== undefined && user !== null) {
        void logService.creteLog(`update user by id: ${JSON.stringify(user)}`, req)
        res.status(200).json(user)
      } else {
        void logService.creteLog('updateByID: usuario não encontrado', req)
        res.status(404).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      void logService.creteLog('updateByID: erro na requisição', req)
      res.status(400).send('requisicão inválida')
    }
  }

  async deleteUserByID (req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.deleteUserByID(req)
      if (user !== undefined && user !== null) {
        void logService.creteLog(`delete user by id: ${JSON.stringify(user)}`, req)
        res.status(200).json(`Usuário: ${user.name} deletado.`)
      } else {
        void logService.creteLog('deleteByID: usuário não encontrado', req)
        res.status(404).send('Usuário não encontrado')
      }
    } catch (error) {
      console.log(error)
      void logService.creteLog('deleteByID: erro na requisição delete', req)
      res.status(400).json('requisicão inválida')
    }
  }
}

export default UserController
