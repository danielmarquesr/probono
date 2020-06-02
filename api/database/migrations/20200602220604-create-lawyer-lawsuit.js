
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('LawyerLawsuits', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    lawyerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id'
      }
    },
    lawsuitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Lawsuits',
        key: 'id'
      }
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

  down: (queryInterface) => queryInterface.dropTable('LawyerLawsuits'),
};
