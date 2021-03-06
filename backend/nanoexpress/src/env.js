import * as consolemd from './helpers/console.js';
import dotenv from 'dotenv-safe';

if (process.env.NODE_ENV === 'development') {
  consolemd.log('!#green( [*Server*]: started in *DEVELOPMENT* mode )');

  if (!process.env.secretKey) {
    dotenv.config();
    consolemd.log('!#cyan( [*Server*]: *ENV* variables are loaded )');
  }
}
