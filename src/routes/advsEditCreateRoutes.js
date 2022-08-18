const express = require('express');

const { renderAdvsEditCreate, createAdvs } = require('../controllers/advsEditCreateController');

const router = express.Router();

router.get('/advs_edit', renderAdvsEditCreate)
  .post('/advs_edit', createAdvs);

module.exports = router;
