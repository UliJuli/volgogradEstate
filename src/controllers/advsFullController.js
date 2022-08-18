const renderTemplate = require('../lib/renderTemplate');

const AdvsFullPage = require('../views/pages/AdvsFullPage');
const { Advertisement } = require('../../db/models');

const renderAdvsFullPage = async (req, res) => {
  res.locals.title = 'Advs Full Page';
  const { id } = req.params;
  const advert = await Advertisement.findByPk(id);

  renderTemplate(AdvsFullPage, { adv: advert }, res);
};

module.exports = { renderAdvsFullPage };
