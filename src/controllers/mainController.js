const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');
const { Advertisement } = require('../../db/models');

const renderMain = async (req, res) => {
  const advs = await Advertisement.findAll({ raw: true });

  res.locals.title = 'Some project';
  const { user } = res.locals;
  const wishs = user?.id ? res.app.locals.userData[user.id] : [];
  renderTemplate(MainPage, { user, advs, wishs }, res);
};

module.exports = { renderMain };
