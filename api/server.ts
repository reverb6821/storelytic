import 'reflect-metadata';
import { createConnection, Connection } from 'typeorm';
import path from 'path';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import { router } from './src/routes/index'; //! router import
import * as errorHandler from './src/middlewares/errorHandler'; //! handler error import
import morganMiddleware from './src/middlewares/morganMiddleware'; //! custom middleware for morgan
import Logger from './lib/logger'; //! custom logger builded with winston

const app = express();

dotenv.config(); //* import settings from .env file

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors());
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(errorHandler.notFound) //? http status handler
app.use(errorHandler.internalServerError);

app.use('/logger', (_, res) => {
  Logger.error('ERROR : ');
  Logger.warn('WARNING : ');
  Logger.info('INFO : ');
  Logger.http('HTTP LOG : ');
  Logger.debug('DEBUG : ');
});

// ? swagger config
app.use(
  '/v2/swagger.io/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

app.use(express.static(path.resolve(__dirname, '../dist/client'))); // ? this will make react app visible to server when builded

app.use('/', router); //* express use the routes form router file

createConnection()
  .then(async (connection: Connection) => {
    // ? server activation
    app.listen(PORT, () => {
      Logger.info(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => Logger.error(error));
