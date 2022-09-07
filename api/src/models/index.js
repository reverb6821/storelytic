const config = require('../../config/dbConfig')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./User')(sequelize, Sequelize)
db.role = require('./Role')(sequelize, Sequelize)
db.product = require('./Product')(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'role_id',
  otherKey: 'user_id'
})

db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'user_id',
  otherKey: 'role_id'
})

db.ROLES = ['user', 'admin', 'moderator']

module.exports = db
