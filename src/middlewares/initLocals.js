function initLocals(req, res, next) {
  res.locals.title = '';
  res.locals.errStatus = ''; // <- for ErrorPage and commonErorHandler if we have error

  res.locals.admin = undefined; // <- keep data about admin
  next();
}

module.exports = initLocals;
