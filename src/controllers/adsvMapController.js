const renderTemplate = require('../lib/renderTemplate');
const AdvsOnMapPage = require('../views/pages/AdvsOnMapPage');

const renderAdvsOnMap = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdvsOnMapPage, {}, res);
};

const getAdvs = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdvsOnMapPage, {}, res);
};

module.exports = { renderAdvsOnMap, getAdvs };
