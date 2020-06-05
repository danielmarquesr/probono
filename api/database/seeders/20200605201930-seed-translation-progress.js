module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('TranslationProgress', [
    {
      translationId: 1,
      progressId: 1
    },
    {
      translationId: 1,
      progressId: 2
    },
    {
      translationId: 2,
      progressId: 3
    },
    {
      translationId: 2,
      progressId: 4
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('TranslationProgress', null, {})
};
