import Express from 'express'

const router = Express.Router()

router.get('/gettasks', (request, response) => {
  response.status(200).send('tasks aquis')
})

router.post('/settasks', (request, response) => {
  response.status(200).send('set')
})

export default router
