const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('./sequelize')

class Form extends Model {}

Form.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  config: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Form',
  tableName: 'forms',
  timestamps: false,
});

module.exports = Form;