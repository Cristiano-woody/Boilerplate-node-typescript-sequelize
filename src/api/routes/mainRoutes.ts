import Express from 'express'

const router = Express.Router()

router.post('/user', (req, res) => {
  res.status(200).send('set')
})

router.get('/user/', (req, res) => {
  res.status(200).send('tasks aquis')
})

router.get('/user/:id', (req, res) => {
  res.status(200).send('tasks aquis')
})

router.patch('/user/:id', (req, res) => {
  res.status(200).send('tasks aquis')
})

router.delete('/user/:id', (req, res) => {
  res.status(200).send('tasks aquis')
})

export default router
