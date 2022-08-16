const renderTemplate = require('../lib/renderTemplate');
const UserRegistrationPage = require('../views/pages/UserRegistrationPage');

const renderUserRegistr = (req, res) => {
  res.locals.title = 'User Registration Page';
  renderTemplate(UserRegistrationPage, {}, res);
};

module.exports = { renderUserRegistr };
