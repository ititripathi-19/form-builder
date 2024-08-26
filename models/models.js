const sequelize = require('./sequelize');
const Form = require('./form');

sequelize.sync()

module.exports = {Form};