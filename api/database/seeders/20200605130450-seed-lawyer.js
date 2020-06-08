module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Lawyers', [
    {
      cna: '0001',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Lawyers', null, {}),
};
