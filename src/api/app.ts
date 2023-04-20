import express from 'express'
// importando rotas
import MainRoutes from './routes/mainRoutes'
// importando .env
import * as dotenv from 'dotenv'

dotenv.config()

// iniciando o app
const app = express()

app.use(MainRoutes)

export default app
