module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USR,
    PASSWORD: process.env.PSW,
    DB: process.env.DBNAME,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };