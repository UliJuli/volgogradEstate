const logInSessionWrapper = (req, res, next) => {
  // put here <- data from session
  // const user = req.session?.user;
  // if (!user) { next(); return; }
  // res.locals.user = user;

  const admin = req.session?.admin;
  if (!admin) { next(); return; }
  res.locals.admin = admin;

  next();
};

module.exports = logInSessionWrapper;
