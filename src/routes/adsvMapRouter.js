const express = require('express');

const { renderAdvsOnMap, getAdvs } = require('../controllers/adsvMapController');

const router = express.Router();

router.route('/')
  .get(renderAdvsOnMap)
  .post(getAdvs);

module.exports = router;
