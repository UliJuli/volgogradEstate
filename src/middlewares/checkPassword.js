const bcrypt = require('bcrypt');

async function checkPassword(req, res, next) {
  const { password } = req.body;
  delete req.body.password;
  const passwordToCheck = res.locals.user ? res.locals.user.password : res.locals.admin.password;
  const passCheck = await bcrypt.compare(password, passwordToCheck);
  if (!passCheck) { res.status(400).json({ errType: 'wPassword' }); return; }
  next();
}

module.exports = checkPassword;
