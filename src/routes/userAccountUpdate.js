const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const UserUpdate = require('../views/pages/UserUpdate');

const { User, WishList } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    renderTemplate(UserUpdate, { }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
