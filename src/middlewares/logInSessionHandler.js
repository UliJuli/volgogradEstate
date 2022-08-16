const logInSessionWrapper = (req, res, next) => {
  // put here <- data from session
  // const user = req.session?.user;
  // if (!user) { next(); return; }
  // res.locals.user = user;
  next();
};

module.exports = logInSessionWrapper;
