const express = require('express');
const session = require('express-session');

const {
  redirectToAdvs, renderAdvs, createAdvs, editAdv, deleteAdv, renderFormNewAdvs, renderFormEditAdvs, renderAdv,
} = require('../controllers/adminController');
const checkAdminPermissions = require('../middlewares/checkAdminPermissions');

const router = express.Router();
const sessionConfig = require('../configs/adminSession');

router.use(session(sessionConfig));

router.use(checkAdminPermissions);

router.get('/', redirectToAdvs);
router.route('/advs')
  .get(renderAdvs)
  .post(createAdvs)
  .put(editAdv)
  .delete(deleteAdv);

router.route('/advs/new')
  .get(renderFormNewAdvs);

router.route('/advs/:advsId/edit')
  .get(renderFormEditAdvs);

router.route('/advs/:advsId')
  .get(renderAdv);

module.exports = router;
