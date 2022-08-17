const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const checkLoginUser = require('../middlewares/checkLoginUser');
const ProfilePage = require('../views/pages/ProfilePage');

const { User, WishList } = require('../../db/models');

const router = express.Router();

router.get('/', checkLoginUser, async (req, res) => {
  const { user } = res.locals;
  try {
    const userDb = await User.findOne({ where: { email: user.email } });
    // const advs = await WishList.findAll({ where: { userId: userDb.id } });
    const advs = [1, 2, 3, 4, 5, 6, 7, 8]
    renderTemplate(ProfilePage, { advs, user }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
