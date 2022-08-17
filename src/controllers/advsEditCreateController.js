const renderTemplate = require('../lib/renderTemplate');

const AdvsEditCreatePage = require('../views/pages/AdvsEditCreatePage');
const { Advertisement, Category } = require('../../db/models');

const renderAdvsEditCreate = async (req, res) => {
  res.locals.title = 'User Registration Page';
  const allCategories = await Category.findAll();
  renderTemplate(AdvsEditCreatePage, { allCategories }, res);
};

const createAdvs = async (req, res) => {
  const { title, desk, files } = req.body;
  console.log("req.body", req.body);
  console.log(title)
  console.log(desk)
  console.log(files)
  // const createAdvsOnDb = await Advertisement.create();
};

module.exports = { renderAdvsEditCreate, createAdvs };
