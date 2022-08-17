const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');

const renderMain = async (req, res) => {
  res.locals.title = 'Some project';
  const { user } = res.locals;
  renderTemplate(MainPage, { user }, res);
};

module.exports = { renderMain };
