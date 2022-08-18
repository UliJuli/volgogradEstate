const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const checkLoginUser = require('../middlewares/checkLoginUser');
const WishListPage = require('../views/pages/WishListPage');

const {
  User, Wishlist, Advertisement, Category,
} = require('../../db/models');

const router = express.Router();

router.use(checkLoginUser);

// router.get('/', async (req, res) => res.redirect('/user/wishlist'));

router.get('/wishlist', async (req, res) => {
  try {
    const { user } = res.locals;
    const wishs = res.app.locals.userData[user.id].wishlist;
    const advs = await Advertisement.findAll({
      include: [{ model: Wishlist, where: { userId: user.id } }, { model: Category }],
      raw: true,
    });
    renderTemplate(WishListPage, { user, advs, wishs }, res);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  try {
    await Wishlist.destroy({ where: { userId: user.id, advertisementId: id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/add/:id', async (req, res) => {
  console.log(1);
  const { userData } = res.app.locals;
  const { id } = req.params;
  const { user } = res.locals;
  try {
    const wish = await Wishlist.findOne({ where: { userId: user.id, advertisementId: id } });
    if (wish === null) {
      const newWish = await Wishlist.create({ userId: user.id, advertisementId: id });
      if (!userData[user.id].wishlist) {
        userData[user.id].wishlist = [newWish.advertisementId];
      } else {
        userData[user.id].wishlist.push(newWish.advertisementId);
      }
      res.sendStatus(200);
    } else {
      await Wishlist.destroy({ where: { userId: user.id, advertisementId: id } });
      if (userData[user.id].wishlist) {
        const index = userData[user.id].wishlist.indexOf(id);
        userData[user.id].wishlist.splice(index, 1);
      }
      res.sendStatus(300);
    }
    console.log(2);
  } catch (error) {
    console.log('~ error', error);
    res.sendStatus(500);
  }
});

module.exports = router;
