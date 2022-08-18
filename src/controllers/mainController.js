const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');
const { Advertisement, Category } = require('../../db/models');

const renderMain = async (req, res) => {
  const advs = await Advertisement.findAll({ raw: true, include: Category });
  console.log('~ advs', advs);

  res.locals.title = 'Some project';
  const { user } = res.locals;
  const wishs = user?.id ? res.app.locals.userData[user.id].wishlist : [];
  renderTemplate(MainPage, { user, advs, wishs }, res);
};

module.exports = { renderMain };
