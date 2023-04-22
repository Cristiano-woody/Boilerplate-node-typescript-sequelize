import Express, { type Request, type Response } from 'express'
import UserController from '../controller/USerController'

const router = Express.Router()
const userController = new UserController()

router.get('/user', (req: Request, res: Response) => { void userController.getAll(req, res) })

router.post('/user', (req, res) => { void userController.getById(req, res) })

//
//
//
//

export default router
