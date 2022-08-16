const renderTemplate = require('../lib/renderTemplate');
const AdminAdvsPage = require('../views/pages/AdminAdvsPage');

const renderAdmin = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdminAdvsPage, {}, res);
};

module.exports = { renderAdmin };
