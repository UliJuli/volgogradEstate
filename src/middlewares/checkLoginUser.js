const ReactDOMServer = require('react-dom/server');
const React = require('react');
const ErrorPage = require('../views/pages/ErrorPage');
const { User } = require('../db/models')

const checkLoginUser = async (req, res, next) => {
  const user = req.session.newUser;
  const userDb = await User.findOne({ where: { email: user } });
  if (userDb) {
    next();
  } else {
    const errorPage = React.createElement(ErrorPage, {
      error: { message: 'Вам нужно зарегистрироваться.' },
    });

    const html = ReactDOMServer.renderToStaticMarkup(errorPage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
};

module.exports = checkLoginUser;
