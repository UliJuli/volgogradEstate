const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');
const { Advertisement } = require('../../db/models');

const renderMain = async (req, res) => {
  const rooms = await Advertisement.findAll();
  res.locals.title = 'Some project';
  const { user } = res.locals;
  renderTemplate(MainPage, { user, rooms }, res);
};

module.exports = { renderMain };
