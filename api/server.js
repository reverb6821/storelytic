const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const db = require('./models/sequelize'); //? database

const corsOptions = {
  origin: 'http://localhost:3000'
}

dotenv.config() //? import settings from .env file

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT)

app.use(cors(corsOptions))
app.use(express.json()) //? parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })) //? parse requests of content-type - application/x-www-form-urlencoded
app.use(express.static(path.resolve(__dirname, './view'))); //? express client directory
db.sequelize.sync()

//? routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Storelytic  - Warehouse Management App.' })
})
require('./routes/auth')(app)
require('./routes/user')(app)

//? app port listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
