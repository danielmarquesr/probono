module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Clients', [
    {
      cpf: '04082814132',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Clients', null, {})
};
