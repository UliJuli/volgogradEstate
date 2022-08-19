const _ = require('lodash');
const renderTemplate = require('../lib/renderTemplate');

const AdminAdvsPage = require('../views/pages/AdminAdvsPage');
const ProfilePage = require('../views/pages/ProfilePage');
const AdvEditCreatePage = require('../views/pages/AdvEditCreatePage');

const { Advertisement, Admin, Category } = require('../../db/models');

const redirectToAdvs = async (req, res) => {
  res.redirect('/admin/advs');
};

const renderAdvs = async (req, res) => {
  const advs = await Advertisement.findAll({ raw: true, include: Category });
  console.log('~ advs', advs);
  res.locals.title = 'Some project';
  renderTemplate(AdminAdvsPage, { advs }, res);
};

const createAdvs = async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });
    } else {
      const data = [];

      _.forEach(_.keysIn(req.files.photos), (key) => {
        console.log('~ req.files', req.files);
        const photo = req.files.photos[key];
        console.log('~ photo', photo);
        // Use the mv() method to place the file in upload directory (i.e. "uploads")
        photo.mv(`./public/img/flats/${photo.name}`);
        // push file details
        data.push({
          name: photo.name,
          mimetype: photo.mimetype,
          size: photo.size,
        });
      });
      // send response
      const photosName = [];
      for (let i = 0; i < req.files.photos.length; i += 1) {
        photosName.push(req.files.photos[i].name);
      }
      const {
        title, description, addressString, addressCoords, price, square, roomCount, category,
      } = req.body;
      const findOnDb = await Category.findOne({ row: true, where: { name: category } });
      const findId = findOnDb.id;
      const newAdvs = await Advertisement.create({
        category: findId,
        title,
        description,
        addressString,
        addressCoords: '55.831903,37.411961',
        price,
        photo: photosName.toString(),
        square,
        roomCount,
      });
      res.redirect(`admin/advs/${newAdvs.id}/edit`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const editAdv = async (req, res) => {
  try {
    res.locals.title = 'Some project';
    const {
      title,
      description,
      addressString,
      addressCoords,
      price,
      square,
      roomCount,
    } = req.body;
    const { id } = req.params;
    const advToUpdate = await Advertisement.findByPk(id);
    const dataAdvToUpdate = {};
    if (title) dataAdvToUpdate.title = title;
    if (description) dataAdvToUpdate.description = description;
    if (addressString) dataAdvToUpdate.addressString = addressString;
    if (addressCoords) dataAdvToUpdate.addressCoords = addressCoords;
    if (price) dataAdvToUpdate.price = price;
    if (square) dataAdvToUpdate.square = square;
    if (roomCount) dataAdvToUpdate.roomCount = roomCount;
    await advToUpdate.update(dataAdvToUpdate);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

const deleteAdv = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    await Advertisement.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

const renderFormNewAdvs = async (req, res) => {
  const allCategories = await Category.findAll();
  renderTemplate(AdvEditCreatePage, { isEditForm: false, allCategories }, res);
};

const renderFormEditAdvs = async (req, res) => {
  res.locals.title = 'User Registration Page';
  const { id } = req.query;
  const allCategories = await Category.findAll();
  const adv = Advertisement.findByPk(id);
  renderTemplate(AdvEditCreatePage, { isEditForm: true, allCategories, adv }, res);
};

const renderAdv = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const renderAdminProfile = async (req, res) => {
  res.locals.title = 'Some project';
  const { admin } = res.locals;
  renderTemplate(ProfilePage, { profileData: admin }, res);
};

const updateAdminProfile = async (req, res) => {
  try {
    const { admin } = res.locals;
    const {
      firstName, lastName, phoneNumber, email,
    } = req.body;
    const adminToUpdate = await Admin.findByPk(admin.id);
    const dataToUpdate = {};
    if (firstName) dataToUpdate.firstName = firstName;
    if (lastName) dataToUpdate.lastName = lastName;
    if (phoneNumber) dataToUpdate.phoneNumber = phoneNumber;
    if (email) dataToUpdate.email = email;
    await adminToUpdate.update(dataToUpdate);
    req.session.admin = adminToUpdate;
    req.session.save(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  redirectToAdvs,
  renderAdvs,
  createAdvs,
  editAdv,
  deleteAdv,
  renderFormNewAdvs,
  renderFormEditAdvs,
  renderAdv,
  renderAdminProfile,
  updateAdminProfile,
};
