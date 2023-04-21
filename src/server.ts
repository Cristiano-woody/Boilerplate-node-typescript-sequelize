import dataSource from './db/dataSource'
import app from './api/app'
// importando o .env
import * as dotenv from 'dotenv'
dotenv.config()

const portServer = process.env.PORT_API

try {
  void dataSource.authenticate().then(() => {
    console.log('banco iniciado')
    app.listen(portServer, () => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`\n Aplicação iniciada na porta: ${portServer} \n`)
    })
  })
} catch (error) {
  console.log(error)
}
