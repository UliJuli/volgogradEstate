const renderTemplate = require('../lib/renderTemplate');

const AdvsEditCreatePage = require('../views/pages/AdvsEditCreatePage');
const { Advertisement, Category } = require('../../db/models');

const renderAdvsEditCreate = (req, res) => {
  res.locals.title = 'User Registration Page';
  // const allCatagory = await Category.findAll();
  renderTemplate(AdvsEditCreatePage, {}, res);
};

const createAdvs = async (req, res) => {
  const { title, desk, files } = req.body;
  console.log("TITLE", title);
  console.log("DESK", desk);
  console.log("FILES", files);
  // const createAdvsOnDb = await Advertisement.create();
};

module.exports = { renderAdvsEditCreate, createAdvs };
