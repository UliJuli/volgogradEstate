const renderTemplate = require('../lib/renderTemplate');
const AdminAdvsPage = require('../views/pages/AdminAdvsPage');

const redirectToAdvs = async (req, res) => {
  res.redirect('/admin/advs');
};

const renderAdvs = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdminAdvsPage, {}, res);
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

module.exports = {
  redirectToAdvs,
  renderAdvs,
  createAdvs,
  editAdv,
  deleteAdv,
  renderFormNewAdvs,
  renderFormEditAdvs,
  renderAdv,
};
