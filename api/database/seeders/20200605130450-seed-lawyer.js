module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Lawyers', [
    {
      cna: '0001',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Lawyers', null, {})
};
