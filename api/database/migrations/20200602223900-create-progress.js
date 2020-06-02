
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Progresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    text: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    lawsuitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Lawsuits',
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
  }),
  down: (queryInterface) => queryInterface.dropTable('Progresses'),
};
