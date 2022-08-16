const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const checkLoginUser = require('../middlewares/checkLoginUser');
const ProfilePage = require('../views/pages/ProfilePage');

const { User, WishList } = require('../../db/models');

const router = express.Router();

router.get('/', checkLoginUser, async (req, res) => {
  const { login } = req.session;
  try {
    const user = await User.findOne({ where: { email: login } });
    const advs = await WishList.findAll({ where: { userId: user.id } });
    renderTemplate(ProfilePage, { advs, login }, res);
  } catch (error) {
    console.log(error);
  }
});

router.put('/', async (req, res) => {
  const { login } = req.session;
  try {
    const user = await User.findOne({ where: { email: login } });
    const advs = await WishList.findAll({ where: { userId: user.id } });
    renderTemplate(ProfilePage, { advs, login }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
