const express = require('express');

const { renderAdvsFullPage } = require('../controllers/advsFullController');

const router = express.Router();

router.get('/advs_Fullpage/:id', renderAdvsFullPage);

module.exports = router;
