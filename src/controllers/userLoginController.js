const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');

const UserLoginPage = require('../views/pages/UserLoginPage');
const { User, Admin } = require('../../db/models');

const renderLoginRegistr = (req, res) => {
  res.locals.title = 'User Login Page';
  renderTemplate(UserLoginPage, {}, res);
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        req.session.user = user;
        req.session.save(() => {
          res.redirect('/');
        });
        return;
      }
    }

    const admin = await Admin.findOne({ where: { email }, raw: true });
    if (admin) {
      const passwordCheck = await bcrypt.compare(password, admin.password);
      if (passwordCheck) {
        req.session.admin = admin;
        req.session.save(() => {
          res.redirect('/admin');
        });
        return;
      }
    }

    res.status(400).redirect('/user_registration');
  } catch (error) {
    res.sendStatus(500);
  }
};

const logOut = (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('loginInfo');
      res.redirect('/');
    });
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderLoginRegistr, userLogin, logOut };
