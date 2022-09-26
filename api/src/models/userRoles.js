module.exports = (sequelize, Sequelize) => {
  const UserRoles = sequelize.define('UserRoles', {
    roles_id: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.STRING
    }
  })
  return UserRoles
}
