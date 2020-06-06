module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('TranslationProgress', [
    {
      translationId: 1,
      progressId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      translationId: 3,
      progressId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      translationId: 1,
      progressId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      translationId: 2,
      progressId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      translationId: 2,
      progressId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('TranslationProgress', null, {}),
};
