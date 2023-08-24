const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hannn', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging:false,
});

module.exports = sequelize;






            