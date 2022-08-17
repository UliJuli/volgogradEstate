module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Categories', [{
    name: 'Квартира',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Комната',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Дом',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {}),
};
