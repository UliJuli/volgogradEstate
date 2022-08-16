const bcrypt = require('bcrypt');

async function checkPassword(req, res, next) {
  const { password } = req.body;
  const passwordToCheck = res.locals.user ? res.locals.user.password : res.locals.admin.password;
  const passCheck = await bcrypt.compare(password, passwordToCheck);
  if (!passCheck) { throw new Error('Пароль не совпадает'); }
  next();
}

module.exports = checkPassword;
