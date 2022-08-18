const ReactDOMServer = require('react-dom/server');
const React = require('react');
const ErrorPage = require('../views/pages/ErrorPage');
const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');

const checkLoginUser = async (req, res, next) => {
  try {
    const { user } = res.locals;
    const userDb = await User.findOne({ where: { email: user.email } });
    if (!userDb) { res.status(400).redirect('/login'); return; }
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = checkLoginUser;
