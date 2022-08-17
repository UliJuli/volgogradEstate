const bcrypt = require('bcrypt');

async function checkPassword(req, res, next) {
  const { password } = req.body;
  console.log('~ req.body', req.body);
  console.log('~ password', password);
  const passwordToCheck = res.locals.user ? res.locals.user.password : res.locals.admin.password;
  const passCheck = await bcrypt.compare(password, passwordToCheck);
  console.log('~ passCheck', passCheck);
  if (!passCheck) { res.status(400).json({ errType: 'wPassword' }); return; }
  next();
}

module.exports = checkPassword;
