const express = require('express');

const { renderUserRegistr, createUser } = require('../controllers/userRegController');

const router = express.Router();

const mustBeNotLogined = require('../middlewares/mustBeNotLogined');

router.route('/user_registration')
  .all(mustBeNotLogined)
  .get(renderUserRegistr)
  .post(createUser);

module.exports = router;
