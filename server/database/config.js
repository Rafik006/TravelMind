const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('travelMind', 'root', 'firemanfireman@@', {
  host: 'localhost',
  dialect: 'mysql',
});



module.exports = sequelize;
