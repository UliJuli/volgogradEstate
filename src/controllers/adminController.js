const renderTemplate = require('../lib/renderTemplate');
const AdminPage = require('../views/pages/AdminPage');

const renderAdmin = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdminPage, {}, res);
};

module.exports = { renderAdmin };
