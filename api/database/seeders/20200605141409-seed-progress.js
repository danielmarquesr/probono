const description1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero. Adipiscing elit duis tristique sollicitudin nibh sit amet. Sit amet facilisis magna etiam tempor orci eu. Risus in hendrerit gravida rutrum.';
const description2 = 'Neque viverra justo nec ultrices dui. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Adipiscing elit ut aliquam purus. Quis blandit turpis cursus in hac.';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Progresses', [
    {
      description: description1,
      date: new Date('2019-05-01'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: description1,
      date: new Date('2019-07-05'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: description2,
      date: new Date('2019-09-10'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: description2,
      date: new Date('2019-09-30'),
      lawsuitId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Progresses', null, {}),
};
