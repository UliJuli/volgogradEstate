const _ = require('lodash');
const renderTemplate = require('../lib/renderTemplate');

const AdvsEditCreatePage = require('../views/pages/AdvsEditCreatePage');
const { Advertisement, Category } = require('../../db/models');

const renderAdvsEditCreate = async (req, res) => {
  res.locals.title = 'User Registration Page';
  const allCategories = await Category.findAll();
  renderTemplate(AdvsEditCreatePage, { allCategories }, res);
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
        const photo = req.files.photos[key];
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
      for (let i = 0; i < req.files.photos.length; i++) {
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
      res.redirect(`/advs_fullPage/${newAdvs.id}`);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAdvs = async (req, res) => {
  try {
    const { id } = req.body;
    await Advertisement.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderAdvsEditCreate, createAdvs, deleteAdvs };
