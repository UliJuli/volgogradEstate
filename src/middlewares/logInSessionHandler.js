const logInSessionWrapper = (req, res, next) => {
  const user = req.session?.user;
  if (user) {
    res.locals.user = user;
    console.log('~ res.locals.user', res.locals.user);
    next();
    return;
  }

  const admin = req.session?.admin;
  if (!admin) {
    res.locals.admin = admin;
    console.log('~ res.locals.admin', res.locals.admin);
    next();
    return;
  }

  next();
};

module.exports = logInSessionWrapper;
