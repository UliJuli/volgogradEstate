require('@babel/register');
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const session = require('express-session');

const app = express();

const sessionConfig = require('./src/configs/userSession');

app.use(session(sessionConfig));

const PORT = process.env.NODE_ENV === 'production'
  ? process.env.PROD_PORT
  : process.env.DEV_PORT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// * -> put here your commonMiddlewares

const initLocals = require('./src/middlewares/initLocals');
const logInSessionWrapper = require('./src/middlewares/logInSessionHandler');

app.use(initLocals);
app.use(logInSessionWrapper);

// * <-

// * -> put here your routers
const mainRouter = require('./src/routes/mainRouter');
const adminRouter = require('./src/routes/adminRouter');

app.use('/admin', adminRouter);
app.use('/', mainRouter);
// * <-

// * -> commonErorHandler

app.use((req, res, next) => {
  res.locals.title = 'Something went wrong';
  res.locals.errStatus = 404;
  throw new Error('Page doesn`t exist');
});

const commonErorHandler = require('./src/middlewares/commonErorHandler');

app.use(commonErorHandler);

// * <-

const dbConnectionCheck = require('./db/dbConnectionCheck');

dbConnectionCheck().then(() => {
  app.listen(PORT);
  console.log('server -> started');
});
