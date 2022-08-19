const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const ProfilePage = require('../views/pages/ProfilePage');
const checkPassword = require('../middlewares/checkPassword');
const checkLoginUser = require('../middlewares/checkLoginUser');

const { User } = require('../../db/models');

const router = express.Router();

router.use(checkLoginUser);
router.get('/profile', async (req, res) => {
  const { user } = res.locals;
  try {
    renderTemplate(ProfilePage, { user }, res);
  } catch (error) {
    res.sendStatus(500);
  }
});

// add middleware to check email
router.put('/profile', checkPassword, async (req, res) => {
  try {
    const { user } = res.locals;
    const {
      firstName, lastName, phoneNumber, email,
    } = req.body;
    const dataToUpdate = {};
    if (firstName) dataToUpdate.firstName = firstName;
    if (lastName) dataToUpdate.lastName = lastName;
    if (phoneNumber) dataToUpdate.phoneNumber = phoneNumber;
    if (email) dataToUpdate.email = email;
    const userToUpdate = await User.findByPk(user.id);
    await userToUpdate.update(dataToUpdate);
    req.session.user = userToUpdate;
    req.session.save(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
