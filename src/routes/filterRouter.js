const express = require('express');
const { Op } = require('sequelize');
const { Advertisement } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');

const router = express.Router();

router.post('/', async (req, res) => {
  const id = req.body.apart;
  let roomCountArr = [];
  if (req.body.roomCount1) {
    roomCountArr.push(Number(req.body.roomCount1));
  }
  if (req.body.roomCount2) {
    roomCountArr.push(Number(req.body.roomCount2));
  }
  if (req.body.roomCount3) {
    roomCountArr.push(Number(req.body.roomCount3));
  }
  const minPrice = req.body.minPrice ? req.body.minPrice : 0;
  const maxPrice = req.body.maxPrice ? req.body.maxPrice : 50000;
  try {
    const rooms = await Advertisement.findAll();
    if (!roomCountArr.length) {
      roomCountArr = rooms.map((el) => el.roomCount);
    }
    const advs = await Advertisement.findAll({
      where: {
        category: id,
        roomCount: roomCountArr,
        price: {
          [Op.and]: {
            [Op.gte]: minPrice,
            [Op.lte]: maxPrice,
          },
        },
      },
    });
    res.locals.title = 'Some project';
    const { user } = res.locals;
    const wishs = user?.id ? res.app.locals.userData[user.id].wishlist : [];
    renderTemplate(MainPage, { user, advs, wishs }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
