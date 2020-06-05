const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Lawsuits', [
    {
      number: '00001',
      title: 'Processo 01',
      description: description,
      lawyerId: 1,
      clientId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      number: '00002',
      title: 'Processo 02',
      description: description,
      lawyerId: 1,
      clientId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      number: '00003',
      title: 'Processo 03',
      description: description,
      lawyerId: 1,
      clientId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Lawsuits', null, {})
};
