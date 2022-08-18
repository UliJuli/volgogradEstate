const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const checkLoginUser = require('../middlewares/checkLoginUser');
const WishListPage = require('../views/pages/WishListPage');

const {
  User, Wishlist, Advertisement, Category,
} = require('../../db/models');

const router = express.Router();

router.use(checkLoginUser);

router.get('/', async (req, res) => res.redirect('/user/wishlist'));

router.get('/wishlist', async (req, res) => {
  try {
    const { user } = res.locals;
    const advs = await Advertisement.findAll({
      include: [{ model: Wishlist, where: { userId: user.id } }, { model: Category }],
      raw: true,
    });
    console.log(advs);
    renderTemplate(WishListPage, { advs }, res);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  try {
    await Wishlist.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/add/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  try {
    const wishlist = [];
    const wish = await Wishlist.findOne({ where: { userId: user.id, advertisementId: id } });
    if (wish === null) {
      const newWish = await Wishlist.create({ userId: user.id, advertisementId: id });
      wishlist.push(newWish.advertisementId);
      res.app.locals.userData[user.id] = { wishlist };
      res.sendStatus(200);
    } else {
      await Wishlist.destroy({ where: { userId: user.id, advertisementId: id } });
      const index = wishlist.indexOf(id);
      wishlist.splice(index, 1);
      res.app.locals.userData[user.id] = { wishlist };
      res.sendStatus(300);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
