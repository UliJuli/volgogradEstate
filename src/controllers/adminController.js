const renderTemplate = require('../lib/renderTemplate');
const AdminAdvsPage = require('../views/pages/AdminAdvsPage');

const { Advertisement } = require('../../db/models');

const redirectToAdvs = async (req, res) => {
  res.redirect('/admin/advs');
};

const renderAdvs = async (req, res) => {
  console.log(1);
  const advs = await Advertisement.findAll({ raw: true });
  res.locals.title = 'Some project';
  renderTemplate(AdminAdvsPage, { advs }, res);
};

const createAdvs = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const editAdv = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const deleteAdv = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const renderFormNewAdvs = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const renderFormEditAdvs = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const renderAdv = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const renderAdminProfile = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
};

const updateAdminProfile = async (req, res) => {
  res.locals.title = 'Some project';
  res.sendStatus(200);
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
