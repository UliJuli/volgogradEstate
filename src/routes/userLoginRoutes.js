const express = require('express');

const { renderLoginRegistr, userLogin, logOut } = require('../controllers/userLoginController');

const router = express.Router();

router.get('/login', renderLoginRegistr)
  .post('/login', userLogin)
  .get('/logout', logOut);

module.exports = router;
