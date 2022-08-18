const renderTemplate = require('../lib/renderTemplate');
const AdvsOnMapPage = require('../views/pages/AdvsOnMapPage');

const { Advertisement } = require('../../db/models');

const renderAdvsOnMap = async (req, res) => {
  res.locals.title = 'Some project';
  renderTemplate(AdvsOnMapPage, {}, res);
};

const getAdvs = async (req, res) => {
  try {
    const advsCoords = await Advertisement.findAll({
      attributes: ['id', 'addressCoords'],
    });
    res.status(200).json(advsCoords);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { renderAdvsOnMap, getAdvs };
