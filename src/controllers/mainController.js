const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');
const { Advertisement } = require('../../db/models');

const renderMain = async (req, res) => {
  const advs = await Advertisement.findAll();
  res.locals.title = 'Some project';
  const { user } = res.locals;
  renderTemplate(MainPage, { user, advs }, res);
};

module.exports = { renderMain };
