require('dotenv').config();

const { SESSION_SECRET_USER, SESSION_USER_ALIVE } = process.env;

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  name: 'loginInfo', // * Название куки
  store: new FileStore({ path: './sessions/userSessions' }), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET_USER, // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: Number(SESSION_USER_ALIVE), // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

module.exports = sessionConfig;
