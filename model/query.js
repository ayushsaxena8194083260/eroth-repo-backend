module.exports = (sequelize, Sequelize) => {
    let query = sequelize.define('query', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
                primaryKey: true
          },
          subject: {
          type: Sequelize.STRING,
          allowNull: true
        },
        content: {
            type: Sequelize.STRING,
            allowNull: true
          },
          
      });  
    return query;
    
    };