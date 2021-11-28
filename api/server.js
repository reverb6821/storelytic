const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const logger = require('./lib/winston')

const app = express();
const db = require('./models/sequelize'); //* sequelize model import

//? cors x-cross
const corsOptions = {
  origin: 'http://localhost:3000',
};

dotenv.config(); //? import settings from .env file

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT);

app.use(cors(corsOptions));
app.use(morgan("combined", { stream: logger.stream.write })); //? morgan setted
app.use(function(err, req, res, next) { logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`); next(err)}); //? custom logger used  
app.use(express.json()); //? parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); //? parse requests of content-type - application/x-www-form-urlencoded
app.use(express.static(path.resolve(__dirname, './view'))); //? express client directory

db.sequelize.sync(); //* sequelize db

//! routes
app.get('/', (req, res) => { res.json({ message: 'Welcome to Storelytic  - Warehouse Management App.' }) });
require('./routes/authRoute')(app); //* routes for auth
require('./routes/userRoute')(app); //* routes for user

//! app port listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
