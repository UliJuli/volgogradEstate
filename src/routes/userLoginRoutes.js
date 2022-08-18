const express = require('express');

const { renderLoginRegistr, userLogin, logOut } = require('../controllers/userLoginController');
const mustBeNotLogined = require('../middlewares/mustBeNotLogined');
const mustBeLogined = require('../middlewares/mustBeLogined');

const router = express.Router();

router.route('/login')
  .all(mustBeNotLogined)
  .get(renderLoginRegistr)
  .post(userLogin);

router.route('/logout')
  .get(mustBeLogined, logOut);

module.exports = router;
