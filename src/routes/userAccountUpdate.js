const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const UserUpdate = require('../views/pages/UserUpdate');
const checkPassword = require('../middlewares/checkPassword');

const { User } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { user } = res.locals;
  try {
    renderTemplate(UserUpdate, { user }, res);
  } catch (error) {
    console.log(error);
  }
});

// add middleware to check email
router.post('/', checkPassword, async (req, res) => {
  const { user } = res.locals;
  const {
    firstName, lastName, phoneNumber,
  } = req.body;
  const dataToChange = {};
  if (firstName) dataToChange.firstName = firstName;
  if (lastName) dataToChange.lastName = lastName;
  if (phoneNumber) dataToChange.phoneNumber = phoneNumber;
  try {
    await User.update({
      ...dataToChange,
    }, { where: { email: user.email } });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
