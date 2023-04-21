import type UserInterface from '../interfaces/userInterface'
import DataTypes from 'sequelize'
import dataSource from '../../db/dataSource'

export const User = dataSource.define<UserInterface>('user', {
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

})
