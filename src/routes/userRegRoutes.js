const express = require('express');

const { renderUserRegistr } = require('../controllers/userRegController');

const router = express.Router();

router.get('/user_registration', renderUserRegistr);

module.exports = router;
