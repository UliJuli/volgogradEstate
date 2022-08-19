const renderTemplate = require('../lib/renderTemplate');
const AdvsOnMapPage = require('../views/pages/AdvsOnMapPage');

const { Advertisement } = require('../../db/models');

const renderFlatPage = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdvsOnMapPage, {}, res);
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
