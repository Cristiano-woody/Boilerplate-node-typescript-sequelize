import DataTypes from 'sequelize'
import PostgresDataSource from '../../db/PostgresDataSource'
import type logInterface from '../interface/logInterface'

export const logEntity = PostgresDataSource.define<logInterface>('logs', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  date: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'logs',
  timestamps: false
})

export default logEntity