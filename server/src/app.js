require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const morganMiddleware = require('./middleware/morgan')
const winston = require('./config/winston')
const port = 3000
const db = require('./models')
const Role = db.role;
const cookieSession = require('cookie-session');
const Logger = require('./config/winston')

// ? cors
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
//* cookies
app.use(
  cookieSession({
    name: 'todoapp-session',
    secret: 'COOKIE_SECRET', 
    httpOnly: true,
    sameSite: 'strict'
  })
);

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

function initial() {
  Role.create({
    id: 1,
    name: 'user'
  });
 
  Role.create({
    id: 2,
    name: 'admin'
  });
 
  Role.create({
    id: 3,
    name: 'superadmin'
  });
}

//* simple route
app.get('/', (req, res) => {
  res.json(
    { 
      message: 'Welcome to TODOapp.', 
      status: 200,
    }
  )
})

app.get('/api/v1/healthchecker', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Build CRUD API with Node.js and Sequelize',
  });
});

//* app routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)
require('./routes/product.routes')(app)

app.get('*', function(req, res){
  res.status(404).json({
      status: 'Endpoint not found',
      message: '..What?!'
    })
});

db.sequelize.sync()
.then(() => {
  Logger.info('Sequelize init...')
  Logger.info('Database Synced Correctly')
 })
  .catch((err) => {
    Logger.error(`Failed to sync db: ${err.message}`)
  });

  
app.use(function (err, req, res, next) {
  winston.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`)
  next(err)
})

app.listen(port, () => winston.info(`listening at port ${port}`))

