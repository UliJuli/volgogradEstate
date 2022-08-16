const express = require('express');
const session = require('express-session');

const { renderAdmin } = require('../controllers/adminController');
const checkAdminPermissions = require('../middlewares/checkAdminPermissions');

const router = express.Router();
const sessionConfig = require('../configs/adminSession');

router.use(session(sessionConfig));

router.use(checkAdminPermissions);
router.get('/', renderAdmin);

module.exports = router;
