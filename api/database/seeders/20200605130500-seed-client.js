module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Clients', [
    {
      cpf: '04082814132',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Clients', null, {}),
};
