import { type Model } from 'sequelize'

interface logInterface extends Model {
  id: number
  date: Date
  mensage: string
}

export default logInterface
