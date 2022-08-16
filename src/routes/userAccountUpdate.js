const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const ProfilePage = require('../views/pages/ProfilePage');

const { User, WishList } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    renderTemplate(Registr, { }, res);
  } catch (error) {
    console.log(error);
  }
});

// router.put('/', async (req, res) => {
//   const login = req.session.user;
//   const {
//     firstName, lastName, phoneNumber, email, password,
//   } = req.body;
//   try {
//     await User.update({
//       firstName, lastName, phoneNumber, email, password,
//     }, { where: { email: login } });
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
