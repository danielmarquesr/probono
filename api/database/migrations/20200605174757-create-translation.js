'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Translations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      explanation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      textTarget: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lawyerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Lawyers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => queryInterface.dropTable('Translations')
};
