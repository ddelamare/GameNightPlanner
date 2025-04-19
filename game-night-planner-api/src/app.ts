import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from  'cors'
import logger from 'morgan'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import loginRouter from './routes/login';
import { errorHandler } from './middlewares/errorHandler';
var __dirname = path.resolve(path.dirname(''));

const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204,
    credentials: true
  }


  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors(corsOptions));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/users', usersRouter);
  app.use('/login', loginRouter);
  app.use('/', indexRouter);
  
  app.use(errorHandler);

export default app;     
