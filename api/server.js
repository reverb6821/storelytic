require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const logger = require('./config/winston');
const port = process.env.PORT
const db = require("./src/models");

//? cors
var corsOptions = {
    origin: "http://localhost:5001"
  }; 

app.use(cors(corsOptions));

//* parse requests of content-type - application/json
app.use(express.json());
//* parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//* simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome toStorelytic." });
});

//? logger
app.get('/', function(req, res) {
    throw new Error('error thrown navigating to');
});

// test
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.use(function(err, req, res, next) {
  logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
  next(err)
})  

app.listen(port, () => console.log(`listening at port ${port}`))