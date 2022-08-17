const mustBeNotLogined = (req, res, next) => {
  if (res.locals.admin || res.locals.user) { res.redirect('/'); return; }
  next();
};

module.exports = mustBeNotLogined;
