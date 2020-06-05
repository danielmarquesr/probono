const description1 = '';
const description2 = '';
const description3 = '';
const description4 = '';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Progresses', [
    {
      title: 'Andamento 01',
      description: description1,
      date: new Date('2019-05-01'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Andamento 02',
      description: description2,
      date: new Date('2019-07-05'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Andamento 03',
      description: description3,
      date: new Date('2019-09-10'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Andamento 04',
      description: description4,
      date: new Date('2019-09-30'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Progresses', null, {})
};
