function initLocals(req, res, next) {
  res.locals.title = '';
  next()
}

module.exports = initLocals