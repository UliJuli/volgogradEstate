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
    const hash = await bcrypt.hash(password, 1);
    const tryFindNewUser = await User.findOne({ where: { email } });
    if (!tryFindNewUser) {
      const newUser = await User.create({
        firstName, lastName, phoneNumber, email, password: hash,
      });
      req.session.newUser = newUser.login;
      req.session.save(() => {
        res.redirect('/');
      });
    } res.redirect('/user_registration');
  } catch (error) {
    console.log('Error', error);
  }
};
module.exports = { renderUserRegistr, createUser };
