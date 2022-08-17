const mustBeLogined = (req, res, next) => {
  if (res.locals.admin || res.locals.user) { next(); return; }
  res.redirect('/');
};

module.exports = mustBeLogined;
