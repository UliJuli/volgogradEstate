const express = require('express');

const {
  renderAdvsOnMap, getAdvsCoords, getAdvsData, renderAdvPage,
} = require('../controllers/adsvMapController');

const router = express.Router();

router.route('/:id')
  .post(getAdvsData)
  .get(renderAdvPage);

module.exports = router;
