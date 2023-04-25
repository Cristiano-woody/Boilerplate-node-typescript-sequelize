import logEntity from '../entity/logEntity'
import type logInterface from '../interface/logInterface'
import type { Request } from 'express'
import getDateNow from '../../helpers/getDateNow'

class LogService {
  //
  async crete (messagelog: string, req: Request): Promise<void> {
    const datenow = getDateNow()
    await logEntity.create({
      message: `${messagelog}`,
      date: `${datenow}`
    })
  }

  async getAll (req: Request): Promise<logInterface[] | undefined> {
    const allLogs = await logEntity.findAll()
    if (allLogs !== null && allLogs !== undefined) {
      return allLogs
    }
  }

  async getByID (req: Request): Promise<logInterface | undefined> {
    const log = await logEntity.findByPk(parseInt(req.body.id))
    if (log !== null && log !== undefined) {
      return log
    }
  }
}

export default LogService
