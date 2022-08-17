module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Advertisements', [{
    category: 1,
    title: 'Трешка у вокзала',
    addressString: 'Жукова 15',
    addressCoords: [55.831903, 37.411961],
    description:'классная хата классная хата классная хата классная хата классная хата классная хата классная хата классная хата классная хата классная хата',
    price: 25000,
    photo: '#',
    square: 56,
    roomCount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Advertisements', null, {}),
};

