const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');
const { Advertisement } = require('../../db/models');

const renderMain = async (req, res) => {
  const rooms = await Advertisement.findAll();
  res.locals.title = 'Some project';
  const { user } = res.locals;
  const wishs = res.app.locals.userData[user.id];
  renderTemplate(MainPage, { user, rooms, wishs }, res);
};

module.exports = { renderMain };
