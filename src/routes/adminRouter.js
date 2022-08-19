const express = require('express');
// const session = require('express-session');

const {
  redirectToAdvs, renderAdvs, createAdvs, editAdv, deleteAdv,
  renderFormNewAdvs, renderFormEditAdvs, renderAdv, renderAdminProfile,
  updateAdminProfile,
} = require('../controllers/adminController');

const checkAdminPermissions = require('../middlewares/checkAdminPermissions');
const checkPassword = require('../middlewares/checkPassword');

const router = express.Router();
// const sessionConfig = require('../configs/adminSession');

// router.use(session(sessionConfig));

router.use(checkAdminPermissions);

router.get('/', redirectToAdvs);
router.route('/advs')
  .get(renderAdvs)
  .post(createAdvs);

router.route('/advs/new')
  .get(renderFormNewAdvs);

router.route('/advs/:id/edit')
  .get(renderFormEditAdvs);

router.route('/advs/:advsId')
  .get(renderAdv)
  .delete(deleteAdv)
  .put(editAdv);

router.route('/profile')
  .get(renderAdminProfile)
  .put(checkPassword, updateAdminProfile);

module.exports = router;
