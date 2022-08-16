const express = require('express');

const { renderUserRegistr, createUser } = require('../controllers/userRegController');

const router = express.Router();

router.get('/user_registration', renderUserRegistr)
  .post('/user_registration', createUser);

module.exports = router;
