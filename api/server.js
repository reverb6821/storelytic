require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors");
const morganMiddleware = require('./src/middleware/morgan')
const Logger = require('./config/winston');
const port = process.env.PORT
const db = require("./src/models");

//? cors
var corsOptions = {
    origin: "http://localhost:5001"
  }; 

app.use(cors(corsOptions));

//* parse requests of content-type - application/json
app.use(express.json());

//* use morgan
app.use(morganMiddleware);

//* parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//* logger
app.use('/logger', (_, res) => {
  Logger.error('ERROR : ');
  Logger.warn('WARNING : ');
  Logger.info('INFO : ');
  Logger.http('HTTP LOG : ');
  Logger.debug('DEBUG : ');
});

//* simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome toStorelytic." });
});

//* app routes
require('./src/routes/authRoutes')(app);
require('./src/routes/userRoutes')(app);
require('./src/routes/productRoutes')(app);

app.get('/', function(req, res) {
    throw new Error('error thrown navigating to');
});

db.sequelize.sync();

app.use(function(err, req, res, next) {
  Logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
  next(err)
})  

app.listen(port, () =>  Logger.info(`listening at port ${port}`))