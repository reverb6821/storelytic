const config = require('../config/dbConfig')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user')(sequelize, Sequelize)
db.roles = require('./roles')(sequelize, Sequelize)
db.product = require('./products')(sequelize, Sequelize)
db.userRoles = require('./userRoles')(sequelize, Sequelize)

db.roles.belongsToMany(db.user, {
  through: db.userRoles,
  foreignKey: 'roles_id',
  otherKey: 'user_id'
})

db.user.belongsToMany(db.roles, {
  through: db.userRoles,
  foreignKey: 'user_id',
  otherKey: 'roles_id'
})

module.exports = db
