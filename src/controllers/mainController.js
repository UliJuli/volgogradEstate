const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');

const renderMain = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(MainPage, {}, res);
};

module.exports = { renderMain };
