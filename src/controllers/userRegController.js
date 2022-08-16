const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');

const UserRegistrationPage = require('../views/pages/UserRegistrationPage');
const { User } = require('../../db/models');

const renderUserRegistr = (req, res) => {
  res.locals.title = 'User Registration Page';
  renderTemplate(UserRegistrationPage, {}, res);
};

const createUser = async (req, res) => {
  try {
    const {
      firstName, lastName, phoneNumber, email, password,
    } = req.body;

    const tryFindNewUser = await User.findOne({ where: { email } });
    if (tryFindNewUser) { res.redirect('/user_registration'); return; } // send error emai exist
    const hash = await bcrypt.hash(password, 1);
    const newUser = await User.create({
      firstName, lastName, phoneNumber, email, password: hash,
    });
    req.session.user = newUser;
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    console.log('Error', error);
  }
};
module.exports = { renderUserRegistr, createUser };
