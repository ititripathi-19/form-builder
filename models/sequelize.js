const {Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize('mysql://root:root@localhost:3306/nhr');

module.exports = sequelize;