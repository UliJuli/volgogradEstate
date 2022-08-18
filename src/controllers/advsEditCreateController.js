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
  // console.log('PHOTO', req.files.photo);
  // const { title, desk, files } = req.body;
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });
    } else {
      console.log('1111', req.files);
      // Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      // console.log('777', req.files);
      // const { photo } = req.files;
      const data = [];
      // console.log("99999", Object.values(req.files));
      console.log('9999', req.files.photos);
      _.forEach(_.keysIn(req.files.photos), (key) => {
        const photo = req.files.photos[key];
        console.log('photo', photo);
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
      res.send({
        status: true,
        message: 'Files are uploaded',
        data,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { renderAdvsEditCreate, createAdvs };
