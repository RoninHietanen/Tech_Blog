const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  });
}

sequelize.authenticate().then(() => {
  console.log('Connection to database has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to database:', err);
});

module.exports = sequelize;