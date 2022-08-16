const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');

const UserLoginPage = require('../views/pages/UserLoginPage');
const { User } = require('../../db/models');

const renderLoginRegistr = (req, res) => {
  res.locals.title = 'User Login Page';
  const user = req.session.newUser;
  renderTemplate(UserLoginPage, { user }, res);
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (passwordCheck) {
      req.session.newUser = user.login;
      req.session.save(() => {
        res.redirect('/');
      });
    } res.redirect('/login');
  } catch (error) {
    console.log(error);
  }
};

const logOut = (req, res) => {
  try {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie('Cookie');
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderLoginRegistr, userLogin, logOut };
