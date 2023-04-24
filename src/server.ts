import dataSource from './db/dataSource'
import app from './api/app'
// importando o .env
import * as dotenv from 'dotenv'
dotenv.config()

const portServer = process.env.PORT_API

try {
  void dataSource.authenticate().then(() => {
    console.log('\n banco iniciado')
    app.listen(portServer, () => {
      console.log(`\n Aplicação iniciada na porta: ${portServer as string} `)
    })
  })
} catch (error) { console.log(error) }
