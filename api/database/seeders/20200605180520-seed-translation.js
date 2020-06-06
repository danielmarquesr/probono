module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Translations', [
    {
      explanation: 'Explicação sobre determinada coisa',
      textTarget: 'Lorem ipsum dolor sit amet',
      lawyerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      explanation: 'Explicação sobre outra coisa',
      textTarget: 'Neque viverra justo nec ultrices',
      lawyerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      explanation: 'Explicação sobre outra outra coisa',
      textTarget: 'consectetur adipiscing elit',
      lawyerId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Translations', null, {}),
};
