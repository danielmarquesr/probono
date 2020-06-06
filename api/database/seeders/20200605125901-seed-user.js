const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      email: 'joao@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: 'daniel@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
