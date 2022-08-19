const renderTemplate = require('../lib/renderTemplate');
const AdvsFullPage = require('../views/pages/AdvsFullPage');

const { Advertisement } = require('../../db/models');

const renderFlatPage = async (req, res) => {
  const { id } = req.params;
  const adv = await Advertisement.findByPk(id);
  res.locals.title = 'Some project';
  renderTemplate(AdvsFullPage, { adv }, res);
};

const getFlatData = async (req, res) => {
  try {
    const { id } = req.params;
    const flatData = await Advertisement.findByPk(id);
    res.status(200).json(flatData);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { getFlatData, renderFlatPage };
