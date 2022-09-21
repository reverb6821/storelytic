require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morganMiddleware = require('./src/middleware/morgan')
const winston = require('./config/winston')
const port = process.env.PORT
const db = require('./src/models')

// ? cors
const corsOptions = {
  origin: 8081
}

app.use(cors(corsOptions))

//* parse requests of content-type - application/json
app.use(express.json())

//* use morgan
app.use(morganMiddleware)

//* parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//* logger
app.use('/logger', (_, res) => {
  winston.error('ERROR : ')
  winston.warn('WARNING : ')
  winston.info('INFO : ')
  winston.http('HTTP LOG : ')
  winston.debug('DEBUG : ')
})

//* simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Storelytic.' })
})

//* app routes
require('./src/routes/authRoutes')(app)
require('./src/routes/userRoutes')(app)
require('./src/routes/productRoutes')(app)

app.get('/', function (req, res) {
  throw new Error('error thrown navigating to')
})

db.sequelize.sync()

app.use(function (err, req, res, next) {
  winston.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`)
  next(err)
})

app.listen(port, () => winston.info(`listening at port ${port}`))
