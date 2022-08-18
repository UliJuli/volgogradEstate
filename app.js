require('@babel/register');
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const fileUpload = require('express-fileupload'); // для добавления файлов
const session = require('express-session');

const app = express();

const sessionConfig = require('./src/configs/userSession');

app.use(session(sessionConfig));

app.use(fileUpload({ // для добавления файлов
  createParentPath: true,
}));

const PORT = process.env.NODE_ENV === 'production'
  ? process.env.PROD_PORT
  : process.env.DEV_PORT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.static('uploads'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// * -> put here your commonMiddlewares

const initLocals = require('./src/middlewares/initLocals');
const logInSessionHandler = require('./src/middlewares/logInSessionHandler');

app.use(initLocals);
app.use(logInSessionHandler);
// * <-

// * -> put here your routers
const mainRouter = require('./src/routes/mainRouter');
const adminRouter = require('./src/routes/adminRouter');

app.use('/admin', adminRouter);
const userRegRoutes = require('./src/routes/userRegRoutes'); // Роуты на регистрацию
const userLoginRoutes = require('./src/routes/userLoginRoutes'); // Роуты на Логин

const advsFullRoutes = require('./src/routes/advsFullRoutes'); // Роут на фулл страницу объявления
const advsEditCreateRoutes = require('./src/routes/advsEditCreateRoutes'); // Роут на редактирование, создание объявления

const userAccountRouter = require('./src/routes/userAccountRouter');
const userAccountUpdate = require('./src/routes/userAccountUpdate');

const adsvMapRouter = require('./src/routes/adsvMapRouter');

app.use('/', advsEditCreateRoutes);
app.use('/', advsFullRoutes);
app.use('/', userLoginRoutes);
app.use('/', mainRouter);

app.use('/adsvOnMap', adsvMapRouter);

app.use('/', userRegRoutes);

app.use('/user', userAccountRouter);
app.use('/user', userAccountUpdate);

// * <-

// * -> commonErorHandler

app.use((req, res) => { // next
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
