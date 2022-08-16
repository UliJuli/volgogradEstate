const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const ProfilePage = require('../views/pages/ProfilePage');
const checkPassword = require('../middlewares/checkPassword');

const { User, WishList } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    renderTemplate(Registr, { }, res);
  } catch (error) {
    console.log(error);
  }
});

// add middleware to check email
router.put('/', checkPassword, async (req, res) => {
  const {
    firstName, lastName, phoneNumber, email,
  } = req.body;
  const dataToChange = {};
  if (firstName) dataToChange[firstName] = firstName;
  if (lastName) dataToChange[lastName] = lastName;
  if (phoneNumber) dataToChange[phoneNumber] = phoneNumber;
  try {
    await User.update({
      ...dataToChange,
    }, { where: { email } });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
