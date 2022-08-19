const express = require('express');

const {
  getFlatData, renderFlatPage,
} = require('../controllers/flatController');

const router = express.Router();

router.route('/:id')
  .post(getFlatData)
  .get(renderFlatPage);

module.exports = router;
