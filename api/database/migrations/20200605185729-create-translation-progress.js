module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TranslationProgress', {
    translationId: {
      allowNull: false,
      unique: 'unique_tag',
      type: Sequelize.INTEGER,
      references: {
        model: 'Translations',
        key: 'id',
      },
    },
    progressId: {
      allowNull: false,
      unique: 'unique_tag',
      type: Sequelize.INTEGER,
      references: {
        model: 'Progresses',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    uniqueKeys: {
      unique_tag: {
        customIndex: true,
        fields: ['translationId', 'progressId'],
      },
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('TranslationProgress'),
};
