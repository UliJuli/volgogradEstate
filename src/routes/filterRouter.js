const express = require('express');
const { Advertisement } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage')
const router = express.Router();

router.post('/', async (req, res) => {
  const id = req.body.apart;
  try {
    const advs = await Advertisement.findAll({ where: { category: id } });
    res.locals.title = 'Some project';
    const { user } = res.locals;
    const wishs = user?.id ? res.app.locals.userData[user.id].wishlist : [];
    renderTemplate(MainPage, { user, advs, wishs }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
