import 'module-alias/register';
import express from 'express';
import dotenv from 'dotenv';
import notFound from '@routes/notFound'
import home from '@routes/home';
import morganMiddleware from '@middleware/morgan.middleware';
import Logger from '@lib/logger.config';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(morganMiddleware);

app.use('/api/v1/', home)
app.use('/api/v1/', notFound)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use('/logger', (_, _res) => {
  Logger.error('ERROR : ');
  Logger.warn('WARNING : ');
  Logger.info('INFO : ');
  Logger.http('HTTP LOG : ');
  Logger.debug('DEBUG : ');
});

app.listen(port, () => {
  try {
    Logger.info(`Express server is listening at http://localhost:${port} 🚀`)
  } catch (error) {
    Logger.error(`🔴 ERROR: ${error}`)
  }        
});