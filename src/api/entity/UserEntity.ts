import type UserInterface from '../interface/userInterface'
import DataTypes from 'sequelize'
import dataSource from '../../db/dataSource'

export const UserEntity = dataSource.define<UserInterface>('user', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  gender: {
    type: DataTypes.STRING
  }

}, {
  tableName: 'users',
  timestamps: false
})

export default UserEntity
