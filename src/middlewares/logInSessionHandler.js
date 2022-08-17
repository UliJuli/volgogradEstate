const logInSessionWrapper = (req, res, next) => {
  const user = req.session?.user;
  if (user) {
    console.log('~ user', user);
    res.locals.user = user;
  }

  const admin = req.session?.admin;
  if (admin) {
    console.log('~ admin', admin);
    res.locals.admin = admin;
  }

  next();
};

module.exports = logInSessionWrapper;
