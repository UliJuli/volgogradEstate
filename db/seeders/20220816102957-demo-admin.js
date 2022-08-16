module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Admins', [{
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+79000000000',
    email: 'example@example.com',
    // qwerty -> bcrypt(1)
    password: '$2a$04$CsKhk91cugB2AFWAMszlxee1pB7Y9moCEfMpxa9Ea4kiruMS14S56',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Admins', null, {}),
};
