'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user.model')(sequelize, Sequelize)
db.role = require('./role.model')(sequelize, Sequelize)
db.userRoles = require('./user-roles.model')(sequelize, Sequelize)
db.refreshToken = require("./refreshToken.model.js")(sequelize, Sequelize);

db.product = require('./product.model')(sequelize, Sequelize)
db.label = require('./label.model')(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: db.userRoles,
  foreignKey: 'roles_id',
  otherKey: 'user_id'
});

db.user.belongsToMany(db.role, {
  through: db.userRoles,
  foreignKey: 'user_id',
  otherKey: 'roles_id'
});

db.refreshToken.belongsTo(db.user, {
  foreignKey: 'user_id', 
  targetKey: 'id'
});

db.user.hasOne(db.refreshToken, {
  foreignKey: 'user_id', 
  targetKey: 'id'
});

db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;
