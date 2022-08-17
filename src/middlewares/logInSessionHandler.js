const logInSessionWrapper = (req, res, next) => {
  const user = req.session?.user;
  if (user) {
    res.locals.user = user;
  }

  const admin = req.session?.admin;
  if (admin) {
    res.locals.admin = admin;
  }

  next();
};

module.exports = logInSessionWrapper;
