const Sequelize = require('sequelize');

//   const sequelize = new Sequelize('company_repo', 'root', '', {
//   host: 'localhost',
//   port     : '3306',
//   dialect:'mysql' 
// });


const sequelize = new Sequelize('company_repo', 'root', '7poqPd2VPq', {
  host: '192.168.7.51',
  port     : '3306',
  dialect:'mysql' 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:');
  });
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.tutorials = require("../model/query")(sequelize, Sequelize);
  
  module.exports = db;



