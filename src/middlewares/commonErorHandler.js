require('dotenv').config();

const renderTemplate = require('../lib/renderTemplate');

const ErrorPage = require('../views/pages/ErrorPage');

const commonErorHandler = (err, req, res, next) => {
  const error = {};
  error.message = err.message;
  error.stack = err.stack;
  error.status = res.locals.errStatus;

  renderTemplate(ErrorPage, { error }, res);
};

module.exports = commonErorHandler;
