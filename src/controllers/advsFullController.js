const renderTemplate = require('../lib/renderTemplate');

const AdvsFullPage = require('../views/pages/AdvsFullPage');
const { Advertisement } = require('../../db/models');

const renderAdvsFullPage = (req, res) => {
  res.locals.title = 'Advs Full Page';

  renderTemplate(AdvsFullPage, {}, res);
};

module.exports = { renderAdvsFullPage };
